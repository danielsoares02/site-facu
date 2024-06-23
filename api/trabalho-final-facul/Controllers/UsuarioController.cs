using System.Text.Json;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class UsuarioController(IDbContextFactory<DBContext> DBContextFactory) : ControllerBase
{
    [HttpPut]
    public async Task<IActionResult> Atualizar([FromBody] Usuario usuario)
    {
        if (usuario.Id == 0)
        {
            return new BadRequestObjectResult("Id do usuário não informado");
        }

        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "");

        if (usuarioLoado!.Id != usuario.Id)
        {
            return new UnauthorizedObjectResult("Usuário não autorizado");
        }

        // Busca o usuário do banco
        using (var db = DBContextFactory.CreateDbContext())
        {
            var usuarioBanco = await db.Usuarios.FirstOrDefaultAsync(u => u.Id == usuario.Id);
            if (usuarioBanco == null)
            {
                return new NotFoundObjectResult("Usuário não encontrado");
            }

            usuarioBanco.Contato = usuario.Contato;
            usuarioBanco.Email = usuario.Email;
            usuarioBanco.Nome = usuario.Nome;

            if (!string.IsNullOrEmpty(usuario.Senha)) {
                usuarioBanco.Senha = usuario.Senha;
            }

            db.Usuarios.Update(usuarioBanco);
            await db.SaveChangesAsync();

            usuarioBanco.Senha = null;
            return new OkObjectResult(usuarioBanco);
        }
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        using (var db = DBContextFactory.CreateDbContext())
        {
            var usuario = await db.Usuarios.FirstOrDefaultAsync(u => u.Id == id);
            if (usuario == null)
            {
                return new NotFoundObjectResult("Usuário não encontrado");
            }

            usuario.Senha = null;
            return new OkObjectResult(usuario);
        }
    }

    [HttpPut("feedback")]
    public async Task<IActionResult> Feedback([FromBody] string mensagem)
    {
        var usuarioLoado = JsonSerializer.Deserialize<Usuario>(User.Claims.FirstOrDefault(c => c.Type == "usuario")?.Value ?? "")!;

        using (var db = DBContextFactory.CreateDbContext())
        {
            db.Feedbacks.Add(new Feedback {
                IdUsuario = usuarioLoado.Id,
                Mensagem = mensagem
            });
            await db.SaveChangesAsync();
        }

        return new OkResult();
    }
}