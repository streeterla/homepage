#ifndef KAPITEL
#define KAPITEL

class Kapitel
{
public:
	Kapitel();
	~Kapitel();
	int getAnzahlSeiten();
	void setAnzahlSeiten(int zahl);
	char* getName();
	void setName(char* name);
private:
	int anzahlSeiten;
	char* name;
};
#endif
