using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AnunciosController(IDbContextFactory<DBContext> DBContextFactory) {
    [HttpPost]
    public async Task<IActionResult> Cadastrar([FromBody] Anuncio anuncio) {
        using (var db = DBContextFactory.CreateDbContext()) {
            db.Anuncios.Add(anuncio);
            await db.SaveChangesAsync();
        }

        return new OkObjectResult(anuncio);
    }

    [HttpGet]
    public async Task<IActionResult> Listar([FromQuery] string pesquisa) {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncios = await db.Anuncios.Where(a => string.IsNullOrEmpty(pesquisa) || a.Titulo.Contains(pesquisa)).ToListAsync();
            return new OkObjectResult(anuncios);
        }
    }

    [HttpGet(":id")]
    public async Task<IActionResult> Get(int id) {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncio = await db.Anuncios.FirstOrDefaultAsync(a => a.Id == id);
            if (anuncio == null) {
                return new NotFoundObjectResult("Anúncio não encontrado");
            }
            return new OkObjectResult(anuncio);
        }
    }
    
    [HttpDelete(":id")]
    public async Task<IActionResult> Deletar(int id) {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncio = await db.Anuncios.FirstOrDefaultAsync(a => a.Id == id);
            if (anuncio == null) {
                return new NotFoundObjectResult("Anúncio não encontrado");
            }
            db.Anuncios.Remove(anuncio);
            await db.SaveChangesAsync();
            return new OkObjectResult(anuncio);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Atualizar([FromBody] Anuncio anuncio) {
        if (anuncio.Id == 0) {
            return new BadRequestObjectResult("Id do anúncio não informado");
        }

        using (var db = DBContextFactory.CreateDbContext()) {
            db.Anuncios.Update(anuncio);
            await db.SaveChangesAsync();
        }

        return new OkObjectResult(anuncio);
    }

    [HttpGet("usuario/:id")]
    public async Task<IActionResult> ListarPorUsuario(int id) {
        using (var db = DBContextFactory.CreateDbContext()) {
            var anuncios = await db.Anuncios.Where(a => a.Anunciante == id).ToListAsync();
            return new OkObjectResult(anuncios);
        }
    }
}