#include "Buch.h"

Buch::Buch()
{
	erscheinungsjahr = 1011970;
	titel = "titel";
}
Buch::~Buch()
{
}
char* Buch::getTitel()
{
	return titel;
}
void Buch::setTitel(char *name)
{
	titel = name;
}
int Buch::getJahr()
{
	return erscheinungsjahr;
}
void Buch::setJahr(int jahr)
{
	erscheinungsjahr = jahr;
}

