using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class LibrosController : ApiController
    {
        private readonly WebApiContext _db = new WebApiContext();

        // GET: api/Libros
        public IQueryable<LibroDto> GetLibros()
            => from l in _db.Libros
                select new LibroDto
                {
                    IdLibro = l.IdLibro,
                    Titulo = l.Titulo,
                    NombreAutor = l.Autor.Nombre
                };

        // GET: api/Libros/5
        [ResponseType(typeof(Libro))]
        public async Task<IHttpActionResult> GetLibro(int id)
        {
            var libro = await _db.Libros.Select(l =>
                new DetalleLibroDto
                {
                    IdLibro = l.IdLibro,
                    Titulo = l.Titulo,
                    Año = l.Año,
                    Precio = l.Precio,
                    Genero = l.Genero,
                    NombreAutor = l.Autor.Nombre
                }).FirstOrDefaultAsync(dto => dto.IdLibro == id);
            if (libro == null)
            {
                return NotFound();
            }

            return Ok(libro);
        }

        // PUT: api/Libros/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLibro(int id, Libro libro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != libro.IdLibro)
            {
                return BadRequest();
            }

            _db.Entry(libro).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LibroExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Libros
        [ResponseType(typeof(Libro))]
        public async Task<IHttpActionResult> PostLibro(Libro libro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Libros.Add(libro);
            await _db.SaveChangesAsync();

            var dto = new LibroDto
            {
                IdLibro = libro.IdLibro,
                Titulo = libro.Titulo,
                NombreAutor = libro.Autor.Nombre
            };

            return CreatedAtRoute("DefaultApi", new {id = libro.IdLibro}, dto);
        }

        // DELETE: api/Libros/5
        [ResponseType(typeof(Libro))]
        public async Task<IHttpActionResult> DeleteLibro(int id)
        {
            var libro = await _db.Libros.FindAsync(id);
            if (libro == null)
            {
                return NotFound();
            }

            _db.Libros.Remove(libro);
            await _db.SaveChangesAsync();

            return Ok(libro);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LibroExists(int id) => _db.Libros.Count(e => e.IdLibro == id) > 0;
    }
}