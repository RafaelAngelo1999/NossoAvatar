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
    public class CorCabelosController : ControllerBase
    {
        private readonly DataContext _context;

        public CorCabelosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/CorCabelos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CorCabelo>>> GetCorCabelo()
        {
            return await _context.CorCabelo.ToListAsync();
        }

        // GET: api/CorCabelos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CorCabelo>> GetCorCabelo(int id)
        {
            var corCabelo = await _context.CorCabelo.FindAsync(id);

            if (corCabelo == null)
            {
                return NotFound();
            }

            return corCabelo;
        }

        // PUT: api/CorCabelos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCorCabelo(int id, CorCabelo corCabelo)
        {
            if (id != corCabelo.Id)
            {
                return BadRequest();
            }

            _context.Entry(corCabelo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorCabeloExists(id))
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

        // POST: api/CorCabelos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CorCabelo>> PostCorCabelo(CorCabelo corCabelo)
        {
            _context.CorCabelo.Add(corCabelo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCorCabelo", new { id = corCabelo.Id }, corCabelo);
        }

        // DELETE: api/CorCabelos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CorCabelo>> DeleteCorCabelo(int id)
        {
            var corCabelo = await _context.CorCabelo.FindAsync(id);
            if (corCabelo == null)
            {
                return NotFound();
            }

            _context.CorCabelo.Remove(corCabelo);
            await _context.SaveChangesAsync();

            return corCabelo;
        }

        private bool CorCabeloExists(int id)
        {
            return _context.CorCabelo.Any(e => e.Id == id);
        }
    }
}
