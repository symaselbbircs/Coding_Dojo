import re
def regex(search,string):
    return [word for word in string if re.search(r"{}".format(search),word)]

words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
regex_phrases = ['v','ss','e$','b\wb','b*b','b.*b','.*a.*e.*i.*o.*u','^[regularexpression]*$','(\w)\1']

for searchstring in regex_phrases:
    print regex(searchstring,words)
