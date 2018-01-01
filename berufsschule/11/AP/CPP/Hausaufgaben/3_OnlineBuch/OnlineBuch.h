#ifndef ONLINEBUCH
#define ONLINEBUCH

#include "Buch.h"
#include "Kapitel.h"

class OnlineBuch : public Buch
{
public:
	OnlineBuch();
	~OnlineBuch();

	int getAnzahlAutoren();
	void setAnzahlAutoren(int zahl);
	int getAnzahlKapitel();
	void setAnzahlKapitel(int zahl);
//	Kapitel[] kapitel;
//	char* getAutoren();
//	void setAutoren(char* autoren[]);
//	Kapitel getKapitel();
//	void setKapitel(Kapitel kapitel[]);

private:
	int anzahlAutoren;
	int anzahlKapitel;
//	char* autoren[anzahlAutoren];
//	Kapitel kapitel[anzahlKapitel];
};
#endif
