using System.ComponentModel.DataAnnotations;

public class Feedback
{
    public int Id { get; set; }
    public int IdUsuario { get; set; }
    public string Mensagem { get; set; } = "";
}