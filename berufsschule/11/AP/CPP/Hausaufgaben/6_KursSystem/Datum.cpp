#include "Datum.h"

#include <string>
using std::string;

Datum::Datum()
{
	tag = 11;
	monat = 1;
	jahr = 2010;
}

Datum::~Datum()
{
}

bool Datum::equals(Datum d)
{
	if (d.tag = tag)
	{
		if (d.monat = monat)
		{
			if (d.jahr = jahr)
			{
				return true;
			}
		}
	}
	return false;
}

string Datum::getDatum()
{
	string date = string("" + tag) + "." + string("" + monat) + "." + string("" + jahr);
	return date;
}