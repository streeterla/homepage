#include <iostream>
 
using namespace std;


void Quader(double& rf1, double& rf2, double& rf3)
{
	int laenge, breite, hoehe;

	cout << "Laenge: " << endl;
	cin >> laenge;

	cout << "Breite: " << endl;
	cin >> breite;

	cout << "Hoehe: " << endl;
	cin >> hoehe;

	rf1 = laenge * breite;
	rf2 = laenge * hoehe;
	rf3 = breite * hoehe;
}

int main()
{
	cout << "Hallo Welt" << endl;

	double flaeche1, flaeche2, flaeche3;
	Quader(flaeche1, flaeche2, flaeche3);

	cout << "Flaeche1: " << flaeche1 << endl;
	cout << "Flaeche2: " << flaeche2 << endl;
	cout << "Flaeche3: " << flaeche3 << endl;
}