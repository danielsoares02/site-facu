using System.ComponentModel.DataAnnotations;

public class Anuncio
{
    public int Id { get; set; }
    public int Anunciante { get; set; } = 0;
    [Required]
    public string Titulo { get; set; } = "";
    [Required]
    public string Descricao { get; set; } = "";
    [Required]
    public string Imagem { get; set; } = "";
}