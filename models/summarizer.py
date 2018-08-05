from gensim.summarization.summarizer import summarize
from gensim.summarization import keywords
import re

def summary_model(text, ratio = 0.2, max_size = 5000):
	"""
	constructs summary model with
	given text data and ratio
	"""
	# print(text)
	summary = summarize(text, ratio=ratio)
	summary = summary.split("\n")
	# print (summary)
	result = ""
	for entry in summary:
		result += entry + " "

	if len(result) < max_size:
		return result
	else:
		return result