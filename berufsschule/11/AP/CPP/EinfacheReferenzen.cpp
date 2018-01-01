#include <iostream>

using namespace std;

int main()
{
	int zahl = 5;
	int& rRef = zahl;

	cout << "Zahl: " << zahl << endl;
	cout << "Referenz: " << rRef << endl;

	cout << "&Zahl: " << &zahl << endl;
	cout << "&Referenz: " << &rRef << endl;

	cout << "----------------------------------" << endl;

	rRef = 7;

	cout << "Zahl: " << zahl << endl;
	cout << "Referenz: " << rRef << endl;
	
	cout << "&Zahl: " << &zahl << endl;
	cout << "&Referenz: " << &rRef << endl;

	cout << "----------------------------------" << endl;

	int zahl2 = 9;
	rRef = zahl2;

	cout << "Zahl: " << zahl << endl;
	cout << "Zahl2: " << zahl2 << endl;
	cout << "Referenz: " << rRef << endl;
	
	cout << "&Zahl: " << &zahl << endl;
	cout << "&Zahl2: " << &zahl2 << endl;
	cout << "&Referenz: " << &rRef << endl;
}