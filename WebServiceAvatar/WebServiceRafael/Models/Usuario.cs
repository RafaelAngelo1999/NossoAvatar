﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServiceRafael.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string AvatarUrl { get; set; }
        public int SetorId { get; set; }
        public Departamento Departamento { get; set; }
    }
}
