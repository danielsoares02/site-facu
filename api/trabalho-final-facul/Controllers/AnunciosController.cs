using System.Text.Json;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/[controller]")]
public class AnunciosController(IDbContextFactory<DBContext> DBContextFactory) : ControllerBase {
    
    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Cadastrar([FromBody] Anuncio anuncio) {
        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "")!;

        using (var db = DBContextFactory.CreateDbContext()) {
            anuncio.Anunciante = usuarioLoado.Id;
            db.Anuncios.Add(anuncio);
            await db.SaveChangesAsync();
        }

        return new OkObjectResult(anuncio);
    }

    [HttpGet]
    public async Task<IActionResult> Listar([FromQuery] string pesquisa = "") {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncios = await db.Anuncios.Where(a => string.IsNullOrEmpty(pesquisa) || a.Titulo.Contains(pesquisa)).ToListAsync();
            return new OkObjectResult(anuncios);
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id) {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncio = await db.Anuncios.FirstOrDefaultAsync(a => a.Id == id);
            if (anuncio == null) {
                return new NotFoundObjectResult("Anúncio não encontrado");
            }
            return new OkObjectResult(anuncio);
        }
    }
    
    [HttpDelete("{id}")]
    [Authorize]
    public async Task<IActionResult> Deletar(int id) {
        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "")!;


        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncio = await db.Anuncios.FirstOrDefaultAsync(a => a.Id == id);
            if (anuncio == null) {
                return new NotFoundObjectResult("Anúncio não encontrado");
            }

            if (anuncio.Anunciante != usuarioLoado.Id) {
                return new UnauthorizedObjectResult("Usuário não autorizado");
            }

            db.Anuncios.Remove(anuncio);
            await db.SaveChangesAsync();
            return new OkObjectResult(anuncio);
        }
    }

    [HttpPut]
    [Authorize]
    public async Task<IActionResult> Atualizar([FromBody] Anuncio anuncio) {
        if (anuncio.Id == 0) {
            return new BadRequestObjectResult("Id do anúncio não informado");
        }

        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "")!;

        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncioBanco = await db.Anuncios.FirstOrDefaultAsync(a => a.Id == anuncio.Id);
            if (anuncioBanco == null) {
                return new NotFoundObjectResult("Anúncio não encontrado");
            }

            if (anuncioBanco.Anunciante != usuarioLoado.Id) {
                return new UnauthorizedObjectResult("Usuário não autorizado");
            }

            anuncioBanco.Titulo = anuncio.Titulo;
            anuncioBanco.Descricao = anuncio.Descricao;
            anuncioBanco.Imagem = anuncio.Imagem;

            db.Anuncios.Update(anuncioBanco);
            await db.SaveChangesAsync();
        }

        return new OkObjectResult(anuncio);
    }

    [HttpGet("usuario")]
    [Authorize]
    public async Task<IActionResult> ListarPorUsuario() {
        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "")!;

        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncios = await db.Anuncios.Where(a => a.Anunciante == usuarioLoado.Id).ToListAsync();
            return new OkObjectResult(anuncios);
        }
    }
}