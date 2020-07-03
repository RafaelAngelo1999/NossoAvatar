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
    public class BarbasController : ControllerBase
    {
        private readonly DataContext _context;

        public BarbasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Barbas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Barba>>> GetBarba()
        {
            return await _context.Barba.ToListAsync();
        }

        // GET: api/Barbas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Barba>> GetBarba(int id)
        {
            var barba = await _context.Barba.FindAsync(id);

            if (barba == null)
            {
                return NotFound();
            }

            return barba;
        }

        // PUT: api/Barbas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBarba(int id, Barba barba)
        {
            if (id != barba.Id)
            {
                return BadRequest();
            }

            _context.Entry(barba).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BarbaExists(id))
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

        // POST: api/Barbas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Barba>> PostBarba(Barba barba)
        {
            _context.Barba.Add(barba);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBarba", new { id = barba.Id }, barba);
        }

        // DELETE: api/Barbas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Barba>> DeleteBarba(int id)
        {
            var barba = await _context.Barba.FindAsync(id);
            if (barba == null)
            {
                return NotFound();
            }

            _context.Barba.Remove(barba);
            await _context.SaveChangesAsync();

            return barba;
        }

        private bool BarbaExists(int id)
        {
            return _context.Barba.Any(e => e.Id == id);
        }
    }
}
