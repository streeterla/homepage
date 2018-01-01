#include <iostream>

using namespace std;

template <class T> T Max(T x, T y)
{
	return x > y ? x : y;
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

	cout << "Die groesste Ganzzahl ist: " << Max(a, b) << endl;
	cout << "Die groesste Kommazahl ist: " << Max(c, d) << endl;
	cout << "Der groesste Buchstabe ist: " << Max(e, f) << endl;
}