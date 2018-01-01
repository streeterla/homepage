#ifndef KURSVERWALTUNG
#define KURSVERWALTUNG

#include "KursVeranstaltung.h"

class KursVerwaltung
{
public:
	KursVerwaltung();
	~KursVerwaltung();
	KursVeranstaltung[] getKursVeranstaltungen();
private:
	KursVeranstaltung kursVeranstaltungen[];
};
#endif
