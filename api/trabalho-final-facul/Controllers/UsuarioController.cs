[ApiController]
[Route("api/[controller]")]
public class UsuarioController(IDbContextFactory<DBContext> DBContextFactory)
{
    [HttpPut]
    public async Task<IActionResult> Atualizar([FromBody] Usuario usuario)
    {
        if (usuario.Id == 0)
        {
            return new BadRequestObjectResult("Id do usuário não informado");
        }

        using (var db = DBContextFactory.CreateDbContext())
        {
            db.Usuarios.Update(usuario);
            await db.SaveChangesAsync();
        }

        return new OkObjectResult(usuario);
    }

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
            return new OkObjectResult(usuario);
        }
    }

    [HttpPut("feedback")]
    public async Task<IActionResult> Feedback([FromBody] string mensagem)
    {
        using (var db = DBContextFactory.CreateDbContext())
        {
            db.Feedbacks.Add(new Feedback {
                Mensagem = mensagem
            });
            await db.SaveChangesAsync();
        }

        return new OkResult();
    }
}