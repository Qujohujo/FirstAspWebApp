using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0,100)]
        public double assignment { get; set; }

        [Required]
        [Range(0, 100)]
        public double project { get; set; }

        [Required]
        [Range(0, 100)]
        public double quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public double exam { get; set; }

        [Required]
        [Range(0, 100)]
        public double intex { get; set; }
    }
}
