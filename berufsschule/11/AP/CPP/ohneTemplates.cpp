#include <iostream>

using namespace std;

int Maxi(int a, int b)
{
	return a > b ? a : b;
}

double Maxd(double a, double b)
{
	return a > b ? a : b;
}

char Maxc(char a, char b)
{
	return a > b ? a : b; 
}


int main()
{
	int a, b;
	double c, d;
	char e, f;

	cout << "Erste Ganzzahl eingeben: " << endl;
	cin >> a;

	cout << "Zweite Ganzzahl eingeben: " << endl;
	cin >> b;

	cout << "Erste Kommazahl eingeben: " << endl;
	cin >> c;

	cout << "Zweite Kommazahl eingeben: " << endl;
	cin >> d;

	cout << "Ersten Buchstaben eingeben: " << endl;
	cin >> e;

	cout << "Zweiten Buchstaben eingeben: " << endl;
	cin >> f;

	cout << "Die groesste Ganzzahl ist: " << Maxi(a, b) << endl;
	cout << "Die groesste Kommazahl ist: " << Maxd(c, d) << endl;
	cout << "Der groesste Buchstabe ist: " << Maxc(e, f) << endl;
}