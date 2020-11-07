using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RestApp.Models
{
  [DataContract]
  public class WeatherInfo
  {
    [DataMember(Name = "location")]
    public string Location { get; set; }
    [DataMember(Name = "degree")]
    public double Degree { get; set; }
    [DataMember(Name = "dataTime")]
    public DateTime DateTime { get; set; }
  }
}