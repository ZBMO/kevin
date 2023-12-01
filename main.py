import streamsync as ss
print("Hello kevin!")

def click_print_payload(payload):
    if (payload == None): 
        print("no payload found")
    else:
        print("click payload")
        print(payload)

def input_print_payload(state, payload):
    if (payload == None): 
        print("no payload found")
    else:
        print("input payload")
        print(payload)
        state["input_value"] = payload["value"]

def select_print_payload(state, payload):
    if (payload == None): 
        print("no payload found")
    else:
        print("select payload")
        print(payload)
        state["selector_value"] = payload["value"]

initial_state = ss.init_state({
    "my_app": {
        "title": "My App"
    },
    "input_value": None,
    "selector_value": None,
})
