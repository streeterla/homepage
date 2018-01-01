#ifndef KURS
#define KURS

class Kurs
{
public:
	Kurs();
	~Kurs();
	int getKursNr();
	int getMaxTeilnehmer();
private:
	int kursNr;
	char* kursTitel;
	int maxTeilnehmer;
};
#endif
