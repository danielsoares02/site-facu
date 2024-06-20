using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using Microsoft.IdentityModel.Tokens;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController(IDbContextFactory<DBContext> DBContextFactory, IConfiguration Configuration) : ControllerBase
{
    [HttpPost("cadastrar")]
    public async Task<Usuario> Cadastrar([FromBody] Usuario usuario)
    {
        using (var db = DBContextFactory.CreateDbContext())
        {
            db.Usuarios.Add(usuario);
            await db.SaveChangesAsync();
        }

        var tokenString = GenerateJwtToken(usuario);

        this.HttpContext.Response.Headers.Authorization = "Bearer " + tokenString;
        
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

            var tokenString = GenerateJwtToken(usuario);

            this.HttpContext.Response.Headers.Authorization = "Bearer " + tokenString;
            return new OkObjectResult(usuario);
        }
    }


    private string GenerateJwtToken(Usuario usuario)
    {
        var claims = new[]
        {
            new Claim("usuario", JsonSerializer.Serialize(usuario)),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            claims: claims,
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
