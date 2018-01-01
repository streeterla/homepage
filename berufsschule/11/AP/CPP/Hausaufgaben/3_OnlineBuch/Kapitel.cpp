#include "Kapitel.h"

Kapitel::Kapitel()
{
	anzahlSeiten = 0;
	name = "kapitel";
}
Kapitel::~Kapitel()
{
}

int Kapitel::getAnzahlSeiten()
{
	return anzahlSeiten;
}
void Kapitel::setAnzahlSeiten(int zahl)
{
	anzahlSeiten = zahl;
}
char* Kapitel::getName()
{
	return name;
}
void Kapitel::setName(char *name)
{
	this->name = name;
}
