#include <iostream>
#include "OnlineBuch.h"
#include "Buch.h"
#include "Kapitel.h"

using namespace std;

int main()
{
	Buch book;
	book.setJahr(28122009);
	book.setTitel("mein Buch");

	cout << "Das Buch mit dem Titel " << book.getTitel() << " erschien am " << book.getJahr() << endl;
}