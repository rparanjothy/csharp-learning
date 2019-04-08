using System;
using System.Collections.Generic;

namespace cs_learning
{
    class Learning
    {

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            String[] names = { "a", "b", "c" };
            Console.WriteLine(names.Length);
            Console.WriteLine(String.Join(" ", names));

            int age = 10;
            Console.WriteLine(age);

            int[] ages = { 1, 2, 3, 4, 5 };

            List<int> ageList = new List<int>() { 1, 2, 3, 4 } ;
            ageList.ForEach(e => Console.WriteLine(e));
            ageList.Add(8);
            ageList.Insert(0, 99);
            ageList.ForEach(e => Console.WriteLine(e));

        }
    }
}