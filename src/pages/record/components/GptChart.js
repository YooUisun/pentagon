import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Doughnut, Bar } from 'react-chartjs-2';

function FitnessTracker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activities, setActivities] = useState({
        "2024-11-28": { cardio: 30, strength: 20, yoga: 10 },
        "2024-11-29": { cardio: 40, strength: 10, yoga: 30 },
    });

    const chartData = {
        labels: ['Cardio', 'Strength', 'Yoga'],
        datasets: [
            {
                data: [40, 30, 30],
                backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
            },
        ],
    };

    const barData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Minutes',
                data: [20, 30, 40, 50, 60, 70, 80],
                backgroundColor: '#4CAF50',
            },
        ],
    };

    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ flex: 1 }}>
                <Calendar onChange={setSelectedDate} value={selectedDate} />
                <div>
                    <h3>{selectedDate.toDateString()}</h3>
                    <p>운동 기록: {JSON.stringify(activities[selectedDate.toISOString().split('T')[0]] || '없음')}</p>
                </div>
            </div>
            <div style={{ flex: 2, marginLeft: '20px' }}>
                <Doughnut data={chartData} />
                <Bar data={barData} />
            </div>
        </div>
    );
}

export default FitnessTracker;
