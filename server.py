from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, make_response
import os
from models import summarizer
import json
app = Flask(__name__)
@app.route("/")
def main():
    return render_template('index.html')
@app.route("/enter")
def enter():
	return render_template('enter.html')
@app.route('/summarize', methods=['POST'])
def summarize():
    print("**** Request received ****")
    data = request.form
    # print(data)
    try:
    	text = data["summary_input"]
    	ratio = int(data["ratio"])*0.01
    	print("**** Generating summary with ratio = {}****".format(ratio))
    	# print(text)
    	response={}
    	response["result"] = summarizer.summary_model(text,ratio)
    	return make_response(jsonify(response))
    except Exception as e:
    	print(e)
if __name__ == "__main__":
	app.run()