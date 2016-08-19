using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Autor
    {
        [Key]
        public int IdAutor { get; set; }

        [Required]
        public string Nombre { get; set; }
    }
}