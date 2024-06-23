using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class Usuario
{
    public int Id { get; set; }
    [Required]
    public string Nome { get; set; } = "";
    [Required]
    public string Email { get; set; } = "";
    public string? Senha { get; set; }
    public string Contato { get; set; } = "";
}