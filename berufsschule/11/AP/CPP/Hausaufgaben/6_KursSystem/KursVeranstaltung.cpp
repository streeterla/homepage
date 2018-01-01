#include "KursVeranstaltung.h"
#include "Kurs.h"
#include "Datum.h"


KursVeranstaltung::KursVeranstaltung()
{
	Kurs k;
}
KursVeranstaltung::~KursVeranstaltung()
{
}

Kurs KursVeranstaltung::getKurs()
{
	return kurs;
}
Datum KursVeranstaltung::getDatum()
{
	return datum;
}

