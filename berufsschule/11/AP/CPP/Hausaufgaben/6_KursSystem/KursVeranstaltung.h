#ifndef KURSVERANSTALTUNG
#define KURSVERANSTALTUNG

#include "Kurs.h"
#include "Datum.h"

class KursVeranstaltung
{
public:
	KursVeranstaltung();
	~KursVeranstaltung();
	Kurs getKurs();
	Datum getDatum();
private:
	Kurs kurs;
	Datum datum;
};
#endif
