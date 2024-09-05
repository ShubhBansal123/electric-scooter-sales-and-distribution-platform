from flask import Flask, request, jsonify
import random

app = Flask(__name__)

# List of Indian city names classified into Tier 2, Tier 3, and Tier 4 cities
indian_city_data = [
    ('Bangalore', 'Tier 2'),
    ('Chennai', 'Tier 2'),
    ('Hyderabad', 'Tier 2'),
    ('Kochi', 'Tier 3'),
    ('Coimbatore', 'Tier 3'),
    ('Mysore', 'Tier 3'),
    ('Madurai', 'Tier 4'),
    ('Tirupati', 'Tier 4'),
    ('Warangal', 'Tier 4'),
    ('Vellore', 'Tier 4')
]

# List of EV vehicles categorized by price range
expensive_ev = ['Ather 450X', 'Ola S1 Pro', 'Bajaj Chetak', 'TVS iQube']
mid_range_ev = ['Hero Electric Photon', 'Ampere Magnus', 'Okinawa PraisePro']
affordable_ev = ['Avon E Scoot', 'Yo Edge', 'Hero Electric Optima', 'Ampere Reo']

# Adding price ranges for each EV vehicle type
ev_prices = {
    'Ather 450X': 150000,
    'Ola S1 Pro': 140000,
    'Bajaj Chetak': 130000,
    'TVS iQube': 125000,
    'Hero Electric Photon': 85000,
    'Ampere Magnus': 90000,
    'Okinawa PraisePro': 95000,
    'Avon E Scoot': 50000,
    'Yo Edge': 55000,
    'Hero Electric Optima': 60000,
    'Ampere Reo': 58000
}

def recommend_ev_with_price(city_tier):
    if city_tier == 'Tier 2':
        ev_choice = random.choice(expensive_ev)
    elif city_tier == 'Tier 3':
        ev_choice = random.choice(mid_range_ev)
    elif city_tier == 'Tier 4':
        ev_choice = random.choice(affordable_ev)
    else:
        ev_choice = "No Recommendation"

    ev_price = ev_prices.get(ev_choice, "Price Not Available")

    return ev_choice, ev_price

@app.route('/recommend', methods=['GET'])
def recommend():
    city_tier = request.args.get('city_tier', '')
    if city_tier not in ['Tier 2', 'Tier 3', 'Tier 4']:
        return jsonify({'error': 'Invalid city tier'}), 400
    
    ev_recommendation, price = recommend_ev_with_price(city_tier)
    return jsonify({'city_tier': city_tier, 'ev_recommendation': ev_recommendation, 'price': price})

if __name__ == '__main__':
    app.run(debug=True)
