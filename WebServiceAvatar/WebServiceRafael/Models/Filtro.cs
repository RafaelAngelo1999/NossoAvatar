using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServiceRafael.Models
{
    public class Filtro
    {
        public int Id { get; set; }
        public TipoObjeto TipoObjeto { get; set; }
        public string Nome { get; set; }
        public string Traducao { get; set; }
    }
}
