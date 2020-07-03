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
    public class CabelosController : ControllerBase
    {
        private readonly DataContext _context;

        public CabelosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Cabelos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cabelo>>> GetCabelo()
        {
            return await _context.Cabelo.ToListAsync();
        }

        // GET: api/Cabelos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cabelo>> GetCabelo(int id)
        {
            var cabelo = await _context.Cabelo.FindAsync(id);

            if (cabelo == null)
            {
                return NotFound();
            }

            return cabelo;
        }

        // PUT: api/Cabelos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCabelo(int id, Cabelo cabelo)
        {
            if (id != cabelo.Id)
            {
                return BadRequest();
            }

            _context.Entry(cabelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CabeloExists(id))
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

        // POST: api/Cabelos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cabelo>> PostCabelo(Cabelo cabelo)
        {
            _context.Cabelo.Add(cabelo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCabelo", new { id = cabelo.Id }, cabelo);
        }

        // DELETE: api/Cabelos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cabelo>> DeleteCabelo(int id)
        {
            var cabelo = await _context.Cabelo.FindAsync(id);
            if (cabelo == null)
            {
                return NotFound();
            }

            _context.Cabelo.Remove(cabelo);
            await _context.SaveChangesAsync();

            return cabelo;
        }

        private bool CabeloExists(int id)
        {
            return _context.Cabelo.Any(e => e.Id == id);
        }
    }
}
