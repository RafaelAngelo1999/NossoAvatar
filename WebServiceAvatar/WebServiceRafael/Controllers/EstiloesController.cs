using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebServiceRafael.Data;
using WebServiceRafael.Models;

namespace WebServiceRafael.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstiloesController : ControllerBase
    {
        private readonly DataContext _context;

        public EstiloesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Estiloes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estilo>>> GetEstilo()
        {
            return await _context.Estilo.ToListAsync();
        }

        // GET: api/Estiloes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estilo>> GetEstilo(int id)
        {
            var estilo = await _context.Estilo.FindAsync(id);

            if (estilo == null)
            {
                return NotFound();
            }

            return estilo;
        }

        // PUT: api/Estiloes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstilo(int id, Estilo estilo)
        {
            if (id != estilo.Id)
            {
                return BadRequest();
            }

            _context.Entry(estilo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstiloExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Estiloes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Estilo>> PostEstilo(Estilo estilo)
        {
            _context.Estilo.Add(estilo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstilo", new { id = estilo.Id }, estilo);
        }

        // DELETE: api/Estiloes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Estilo>> DeleteEstilo(int id)
        {
            var estilo = await _context.Estilo.FindAsync(id);
            if (estilo == null)
            {
                return NotFound();
            }

            _context.Estilo.Remove(estilo);
            await _context.SaveChangesAsync();

            return estilo;
        }

        private bool EstiloExists(int id)
        {
            return _context.Estilo.Any(e => e.Id == id);
        }
    }
}
