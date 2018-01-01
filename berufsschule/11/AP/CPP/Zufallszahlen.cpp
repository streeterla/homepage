#include <iostream>
#include <algorithm>

using namespace std;

template <class T> void Ausgabe(T aArray[12])
{
	for (int i = 0; i <= sizeof(aArray[12]); i++)
	{
		cout << aArray[i] << " ";
	}
	cout << endl;
}


int main()
{
	char aWort[12] = "Algorithmen";
	int aZahlen[12] = {1, 4, 77, 45, 34, 22, 33, 45, 6, 67, 8, 9};

	sort(&aWort[0], &aWort[12]);
	sort(&aZahlen[0], &aZahlen[12]);

	Ausgabe(aWort);
	cout << "---------------------------------" << endl;
	Ausgabe(aZahlen);
}