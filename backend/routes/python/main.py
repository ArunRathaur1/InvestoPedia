import json
import random

def generate_balance_data():
    return {
        "symbol": ''.join(random.choices('AAPLGOOGLTSLA', k=3)),
        "net": round(random.uniform(1000, 10000), 2),
        "cashmarginavailable": round(random.uniform(100, 5000), 2),
        "coverOrderMarginPrsnt": round(random.uniform(0, 50), 2),
        "collateralvalue": round(random.uniform(100, 1000), 2),
        "stat": random.choice(['Ok', 'Not_Ok'])
    }

# Function to simulate holding position data
def generate_holding_position():
    return {
        "BSEHOldingValue": round(random.uniform(1000, 5000), 2),
        "HUqty": random.randint(1, 100),
        "Price": round(random.uniform(50, 200), 2),
        "NSEHOldingValue": round(random.uniform(1000, 5000), 2),
        "Ltp": round(random.uniform(50, 200), 2),
        "SellableQty": random.randint(0, 50)
    }

# Function to simulate order history
def generate_order_history():
    return {
        "order_id": ''.join(random.choices('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', k=8)),
        "symbol": ''.join(random.choices('AAPLGOOGLTSLA', k=3)),
        "status": random.choice(['Executed', 'Pending', 'Cancelled']),
        "quantity": random.randint(1, 100),
        "price": round(random.uniform(100, 1000), 2)
    }

# Function to simulate netwise position data
def generate_netwise_position():
    return {
        "symbol": ''.join(random.choices('AAPLGOOGLTSLA', k=3)),
        "net_quantity": random.randint(-100, 100),
        "net_value": round(random.uniform(-5000, 5000), 2),
        "market_value": round(random.uniform(1000, 10000), 2),
    }

# Generate data similar to Alice Blue API
data = {}

# Simulate balance data
old_balance = generate_balance_data()
keys = ['symbol', 'net', 'cashmarginavailable', 'coverOrderMarginPrsnt', 'collateralvalue']
balance = {key: old_balance[key] for key in keys if key in old_balance}
if old_balance['stat'] == 'Not_Ok':
    balance = []
data['Balance'] = balance

# Simulate holding positions
holding_positions = [generate_holding_position() for _ in range(5)]  # Randomly generating 5 holding positions
data['Holding Position'] = holding_positions

# Simulate order history
orders = [generate_order_history() for _ in range(3)]  # Randomly generating 3 orders
data['Order History'] = orders

# Simulate netwise positions
netwise_positions = [generate_netwise_position() for _ in range(4)]  # Randomly generating 4 netwise positions
data['Netwise Positions'] = netwise_positions

# Convert the simulated data to JSON format and print
json_data = json.dumps(data, indent=4)
print(json_data)

