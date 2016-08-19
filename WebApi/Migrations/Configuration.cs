using System.Data.Entity.Migrations;
using WebApi.Models;

namespace WebApi.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<WebApiContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApiContext context)
        {
            context.Autores.AddOrUpdate(x => x.IdAutor,
                new Autor {IdAutor = 1, Nombre = "Jane Austen"},
                new Autor {IdAutor = 2, Nombre = "Charles Dickens"},
                new Autor {IdAutor = 3, Nombre = "Miguel de Cervantes"}
                );

            context.Libros.AddOrUpdate(x => x.IdAutor,
                new Libro
                {
                    IdLibro = 1,
                    Titulo = "Pride and Prejudice",
                    Año = 1813,
                    IdAutor = 1,
                    Precio = 9.99,
                    Genero = "Comedy of manners"
                },
                new Libro
                {
                    IdLibro = 2,
                    Titulo = "Northanger Abbey",
                    Año = 1817,
                    IdAutor = 1,
                    Precio = 12.95,
                    Genero = "Gothic parody"
                },
                new Libro
                {
                    IdLibro = 3,
                    Titulo = "David Copperfield",
                    Año = 1850,
                    IdAutor = 2,
                    Precio = 15,
                    Genero = "Bildungsroman"
                },
                new Libro
                {
                    IdLibro = 4,
                    Titulo = "Don Quixote",
                    Año = 1617,
                    IdAutor = 3,
                    Precio = 8.95,
                    Genero = "Picaresque"
                }
                );
        }
    }
}