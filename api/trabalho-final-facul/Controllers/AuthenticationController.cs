[ApiController]
[Route("api/[controller]")]
public class AuthenticationController(IDbContextFactory<DBContext> DBContextFactory)
{
    [HttpPost("cadastrar")]
    public async Task<Usuario> Cadastrar([FromBody] Usuario usuario)
    {
        using (var db = DBContextFactory.CreateDbContext())
        {
            db.Usuarios.Add(usuario);
            await db.SaveChangesAsync();
        }

        return usuario;
    }

    [HttpPut("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel login)
    {
        using (var db = DBContextFactory.CreateDbContext())
        {
            var usuario = await db.Usuarios.FirstOrDefaultAsync(u => u.Email == login.Email && u.Senha == login.Senha);

            if (usuario == null)
            {
                return new UnauthorizedObjectResult("Usuário ou senha inválidos");
            }

            return new OkObjectResult(usuario);
        }
    }
}
