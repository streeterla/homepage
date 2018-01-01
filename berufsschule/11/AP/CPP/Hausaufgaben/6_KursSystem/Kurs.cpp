#include "Kurs.h"

Kurs::Kurs()
{
	kursNr = 0;
	kursTitel = "titel";
	maxTeilnehmer = 0;
}
Kurs::~Kurs()
{
}

int Kurs::getKursNr()
{
	return kursNr;
}

int Kurs::getMaxTeilnehmer()
{
	return maxTeilnehmer;
}