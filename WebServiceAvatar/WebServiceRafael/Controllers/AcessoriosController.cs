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
    public class AcessoriosController : ControllerBase
    {
        private readonly DataContext _context;

        public AcessoriosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Acessorios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Acessorios>>> GetAcessorios()
        {
            return await _context.Acessorios.ToListAsync();
        }

        // GET: api/Acessorios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Acessorios>> GetAcessorios(int id)
        {
            var acessorios = await _context.Acessorios.FindAsync(id);

            if (acessorios == null)
            {
                return NotFound();
            }

            return acessorios;
        }

        // PUT: api/Acessorios/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAcessorios(int id, Acessorios acessorios)
        {
            if (id != acessorios.Id)
            {
                return BadRequest();
            }

            _context.Entry(acessorios).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AcessoriosExists(id))
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

        // POST: api/Acessorios
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Acessorios>> PostAcessorios(Acessorios acessorios)
        {
            _context.Acessorios.Add(acessorios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAcessorios", new { id = acessorios.Id }, acessorios);
        }

        // DELETE: api/Acessorios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Acessorios>> DeleteAcessorios(int id)
        {
            var acessorios = await _context.Acessorios.FindAsync(id);
            if (acessorios == null)
            {
                return NotFound();
            }

            _context.Acessorios.Remove(acessorios);
            await _context.SaveChangesAsync();

            return acessorios;
        }

        private bool AcessoriosExists(int id)
        {
            return _context.Acessorios.Any(e => e.Id == id);
        }
    }
}
