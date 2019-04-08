using System;
using System.Collections.Generic;

public class Program
{
	public static void Main()
	{
		Console.WriteLine("Hello World");
		String[] names = new String[]{"a", "a", "a", "a", "a", "a", "a", "a"};
		foreach (var name in names)
		{
			Console.WriteLine(name);
		}

		List<int> ages = new List<int>{1, 2, 3, 4, 4};
		foreach (var a in ages)
		{
			Console.WriteLine(a);
		}

		Dictionary<int, String> myD = new Dictionary<int, String>();
		myD.Add(1, "R");
		myD.Add(11, "R");
		myD.Add(122, "R");
		myD.Add(12, "R");
		Console.WriteLine(myD[1]);
		foreach (KeyValuePair<int, String> kv in myD)
		{
			Console.WriteLine("key is :" + kv.Key + " value is :" + kv.Value);
		}
		
	String x= String.Format("{0} {1}",1,2)	;
		Console.WriteLine(x);
	}
}