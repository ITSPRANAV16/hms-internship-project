// =============================================
//  Chaitanya Hospital — Dashboard JavaScript
// =============================================

// ---- MOCK DATA ----

const patientsData = [
    { name: "Rajesh Kumar",    age: 54, ward: "ICU",        bed: "B-01", date: "2026-06-10", doctor: "Dr. Sarah Johnson",   status: "Critical" },
    { name: "Sunita Patil",    age: 32, ward: "Maternity",  bed: "M-04", date: "2026-06-12", doctor: "Dr. Emily Davis",    status: "Stable" },
    { name: "Anil Deshmukh",   age: 67, ward: "General",    bed: "G-08", date: "2026-06-13", doctor: "Dr. Robert Smith",   status: "Stable" },
    { name: "Priya Sharma",    age: 28, ward: "General",    bed: "G-11", date: "2026-06-14", doctor: "Dr. Sarah Johnson",  status: "Stable" },
    { name: "Mohan Gaikwad",   age: 45, ward: "Orthopedic", bed: "O-02", date: "2026-06-11", doctor: "Dr. James Wilson",   status: "Post-Op" },
    { name: "Kavita Rao",      age: 72, ward: "ICU",        bed: "B-03", date: "2026-06-09", doctor: "Dr. Michael Chen",   status: "Critical" },
    { name: "Suresh Naik",     age: 38, ward: "Pediatric",  bed: "P-06", date: "2026-06-15", doctor: "Dr. Emily Davis",    status: "Stable" },
    { name: "Anjali Mehta",    age: 61, ward: "General",    bed: "G-15", date: "2026-06-15", doctor: "Dr. Lisa Wong",      status: "Discharge" },
    { name: "Vikram Joshi",    age: 29, ward: "Orthopedic", bed: "O-05", date: "2026-06-14", doctor: "Dr. James Wilson",   status: "Post-Op" },
    { name: "Nalini Kulkarni", age: 53, ward: "General",    bed: "G-21", date: "2026-06-16", doctor: "Dr. Robert Smith",   status: "Stable" },
    { name: "Deepak Tiwari",   age: 44, ward: "Pediatric",  bed: "P-09", date: "2026-06-16", doctor: "Dr. Emily Davis",    status: "Stable" },
    { name: "Meera Iyer",      age: 35, ward: "Maternity",  bed: "M-07", date: "2026-06-17", doctor: "Dr. Sarah Johnson",  status: "Stable" },
];

const wasteData = [
    { date: "2026-06-17", type: "Biomedical",  dept: "ICU",        weight: 12.5, status: "Disposed" },
    { date: "2026-06-17", type: "Sharps",      dept: "OT",         weight: 4.0,  status: "Pending" },
    { date: "2026-06-17", type: "General",     dept: "General Ward",weight: 20.0, status: "Disposed" },
    { date: "2026-06-17", type: "Biomedical",  dept: "Pathology",  weight: 8.0,  status: "Pending" },
    { date: "2026-06-17", type: "Sharps",      dept: "Pharmacy",   weight: 2.5,  status: "Disposed" },
    { date: "2026-06-16", type: "General",     dept: "Admin Block", weight: 15.0, status: "Disposed" },
    { date: "2026-06-16", type: "Biomedical",  dept: "ICU",        weight: 11.0, status: "Disposed" },
    { date: "2026-06-16", type: "Sharps",      dept: "Emergency",  weight: 5.5,  status: "Disposed" },
    { date: "2026-06-15", type: "General",     dept: "Cafeteria",  weight: 18.0, status: "Disposed" },
    { date: "2026-06-15", type: "Biomedical",  dept: "OT",         weight: 14.0, status: "Disposed" },
];

const stockData = [
    { name: "Paracetamol 500mg",  category: "Medicines",    qty: 500,  min: 200, unit: "Tablets" },
    { name: "Amoxicillin 250mg",  category: "Medicines",    qty: 80,   min: 100, unit: "Capsules" },
    { name: "Surgical Gloves",    category: "Consumables",  qty: 150,  min: 200, unit: "Pairs" },
    { name: "IV Drip Sets",       category: "Consumables",  qty: 95,   min: 150, unit: "Pcs" },
    { name: "Syringes 5ml",       category: "Consumables",  qty: 600,  min: 300, unit: "Pcs" },
    { name: "Blood Glucose Kit",  category: "Lab Supplies", qty: 20,   min: 30,  unit: "Kits" },
    { name: "Surgical Masks",     category: "Consumables",  qty: 400,  min: 200, unit: "Pcs" },
    { name: "Saline Solution 1L", category: "Medicines",    qty: 60,   min: 100, unit: "Bottles" },
    { name: "ECG Electrodes",     category: "Equipment",    qty: 18,   min: 25,  unit: "Packs" },
    { name: "Latex Bandages",     category: "Consumables",  qty: 250,  min: 100, unit: "Rolls" },
    { name: "Alcohol Wipes",      category: "Consumables",  qty: 800,  min: 400, unit: "Pcs" },
    { name: "Urine Test Strips",  category: "Lab Supplies", qty: 15,   min: 50,  unit: "Strips" },
];

const staffData = [
    { name: "Dr. Sarah Johnson",   role: "Doctor",          dept: "Cardiology",  shift: "Morning", contact: "+91 98765 11001", status: "On Duty" },
    { name: "Dr. Michael Chen",    role: "Doctor",          dept: "Neurology",   shift: "Morning", contact: "+91 98765 11002", status: "On Duty" },
    { name: "Dr. Emily Davis",     role: "Doctor",          dept: "Pediatrics",  shift: "Evening", contact: "+91 98765 11003", status: "On Duty" },
    { name: "Dr. Robert Smith",    role: "Doctor",          dept: "General",     shift: "Night",   contact: "+91 98765 11004", status: "Off Duty" },
    { name: "Dr. Lisa Wong",       role: "Doctor",          dept: "Neurology",   shift: "Morning", contact: "+91 98765 11005", status: "On Duty" },
    { name: "Dr. James Wilson",    role: "Doctor",          dept: "Orthopedic",  shift: "Morning", contact: "+91 98765 11006", status: "On Duty" },
    { name: "Priya Kamble",        role: "Nurse",           dept: "ICU",         shift: "Morning", contact: "+91 98765 22001", status: "On Duty" },
    { name: "Sunita Deshpande",    role: "Nurse",           dept: "General",     shift: "Evening", contact: "+91 98765 22002", status: "On Duty" },
    { name: "Rekha Pawar",         role: "Nurse",           dept: "Maternity",   shift: "Night",   contact: "+91 98765 22003", status: "On Duty" },
    { name: "Anita Shinde",        role: "Nurse",           dept: "Pediatrics",  shift: "Morning", contact: "+91 98765 22004", status: "On Leave" },
    { name: "Rohit Mane",          role: "Lab Technician",  dept: "Pathology",   shift: "Morning", contact: "+91 98765 33001", status: "On Duty" },
    { name: "Swati Bhosale",       role: "Lab Technician",  dept: "Radiology",   shift: "Evening", contact: "+91 98765 33002", status: "On Duty" },
    { name: "Ganesh Jadhav",       role: "Support Staff",   dept: "Housekeeping",shift: "Morning", contact: "+91 98765 44001", status: "On Duty" },
    { name: "Manjusha Gaikwad",    role: "Support Staff",   dept: "Cafeteria",   shift: "Evening", contact: "+91 98765 44002", status: "On Duty" },
];

// ---- BADGE HELPERS ----

function patientStatusBadge(status) {
    const map = {
        "Critical":  "badge-red",
        "Stable":    "badge-green",
        "Post-Op":   "badge-orange",
        "Discharge": "badge-blue",
    };
    return `<span class="status-badge ${map[status] || 'badge-gray'}">${status}</span>`;
}

function wasteTypeBadge(type) {
    const map = { "Biomedical": "waste-bio", "Sharps": "waste-sharps", "General": "waste-general" };
    return `<span class="status-badge ${map[type] || 'badge-gray'}">${type}</span>`;
}

function disposalBadge(status) {
    return status === "Disposed"
        ? `<span class="status-badge badge-green">Disposed</span>`
        : `<span class="status-badge badge-orange">Pending</span>`;
}

function stockStatusBadge(qty, min) {
    if (qty < min) return `<span class="status-badge badge-red">⚠ Restock Urgent</span>`;
    if (qty < min * 1.3) return `<span class="status-badge badge-orange">Low</span>`;
    return `<span class="status-badge badge-green">OK</span>`;
}

function shiftBadge(shift) {
    const map = { "Morning": "badge-blue", "Evening": "badge-orange", "Night": "badge-gray" };
    return `<span class="status-badge ${map[shift] || 'badge-gray'}">${shift}</span>`;
}

function staffStatusBadge(status) {
    const map = { "On Duty": "badge-green", "Off Duty": "badge-gray", "On Leave": "badge-orange" };
    return `<span class="status-badge ${map[status] || 'badge-gray'}">${status}</span>`;
}

// ---- RENDER FUNCTIONS ----

function renderPatients(data) {
    const tbody = document.getElementById('patients-tbody');
    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--text-muted);">No records found.</td></tr>`;
        return;
    }
    tbody.innerHTML = data.map(p => `
        <tr>
            <td><strong>${p.name}</strong></td>
            <td>${p.age}</td>
            <td>${p.ward}</td>
            <td><code style="background:#f1f5f9;padding:2px 8px;border-radius:6px;font-size:12px;">${p.bed}</code></td>
            <td>${p.date}</td>
            <td>${p.doctor}</td>
            <td>${patientStatusBadge(p.status)}</td>
        </tr>
    `).join('');
}

function renderWaste(data) {
    const tbody = document.getElementById('waste-tbody');
    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--text-muted);">No records found.</td></tr>`;
        return;
    }
    tbody.innerHTML = data.map(w => `
        <tr>
            <td>${w.date}</td>
            <td>${wasteTypeBadge(w.type)}</td>
            <td>${w.dept}</td>
            <td><strong>${w.weight} kg</strong></td>
            <td>${disposalBadge(w.status)}</td>
        </tr>
    `).join('');
}

function renderStock(data) {
    const tbody = document.getElementById('stock-tbody');
    const lowCount = data.filter(s => s.qty < s.min).length;
    const okCount  = data.filter(s => s.qty >= s.min).length;

    document.getElementById('total-items-count').textContent = stockData.length;
    document.getElementById('low-stock-count').textContent   = lowCount;
    document.getElementById('ok-stock-count').textContent    = okCount;
    document.getElementById('alertBadge').textContent        = lowCount;
    document.getElementById('overview-stock-alerts').textContent = lowCount;

    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text-muted);">No records found.</td></tr>`;
        return;
    }
    tbody.innerHTML = data.map(s => {
        const isLow = s.qty < s.min;
        return `
            <tr class="${isLow ? 'row-danger' : ''}">
                <td><strong>${s.name}</strong></td>
                <td>${s.category}</td>
                <td><strong style="color:${isLow ? 'var(--red)' : 'var(--text)'}">${s.qty}</strong></td>
                <td>${s.min}</td>
                <td>${s.unit}</td>
                <td>${stockStatusBadge(s.qty, s.min)}</td>
            </tr>
        `;
    }).join('');
}

function renderStaff(data) {
    const tbody = document.getElementById('staff-tbody');
    if (!data.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--text-muted);">No records found.</td></tr>`;
        return;
    }
    tbody.innerHTML = data.map(s => `
        <tr>
            <td><strong>${s.name}</strong></td>
            <td>${s.role}</td>
            <td>${s.dept}</td>
            <td>${shiftBadge(s.shift)}</td>
            <td>${s.contact}</td>
            <td>${staffStatusBadge(s.status)}</td>
        </tr>
    `).join('');
}

function renderOverviewAlerts() {
    const alerts = stockData.filter(s => s.qty < s.min);
    const list = document.getElementById('overview-alerts-list');
    if (!alerts.length) {
        list.innerHTML = `<p style="padding:20px;color:var(--text-muted);text-align:center;">All stock levels are OK!</p>`;
        return;
    }
    list.innerHTML = alerts.map(a => `
        <div class="alert-item">
            <i class="fa-solid fa-circle-exclamation"></i>
            <div class="alert-item-info">
                <p>${a.name}</p>
                <span>${a.qty} ${a.unit} remaining (Min: ${a.min} ${a.unit})</span>
            </div>
            <span class="status-badge badge-red" style="margin-left:auto;">Urgent</span>
        </div>
    `).join('');
}

// ---- TAB NAVIGATION ----

const navItems = document.querySelectorAll('.nav-item[data-tab]');
const tabPanels = document.querySelectorAll('.tab-panel');
const pageTitle = document.getElementById('pageTitle');

const tabTitles = {
    overview: 'Overview',
    patients: 'Patient & Bed Management',
    waste:    'Waste Management',
    stock:    'Stock Management',
    staff:    'Staff Information',
};

navItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const tab = item.dataset.tab;

        navItems.forEach(n => n.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        item.classList.add('active');
        document.getElementById(`tab-${tab}`).classList.add('active');
        pageTitle.textContent = tabTitles[tab] || 'Dashboard';

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');
    });
});

// ---- MOBILE SIDEBAR TOGGLE ----

document.getElementById('menuToggleBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// ---- FILTER LOGIC ----

// Patients
document.getElementById('patient-search').addEventListener('input', applyPatientFilter);
document.getElementById('ward-filter').addEventListener('change', applyPatientFilter);

function applyPatientFilter() {
    const search = document.getElementById('patient-search').value.toLowerCase();
    const ward   = document.getElementById('ward-filter').value;
    const filtered = patientsData.filter(p =>
        (ward === 'all' || p.ward === ward) &&
        (p.name.toLowerCase().includes(search) || p.bed.toLowerCase().includes(search))
    );
    renderPatients(filtered);
}

// Waste
document.getElementById('waste-filter').addEventListener('change', () => {
    const type = document.getElementById('waste-filter').value;
    const filtered = type === 'all' ? wasteData : wasteData.filter(w => w.type === type);
    renderWaste(filtered);
});

// Stock
document.getElementById('stock-search').addEventListener('input', applyStockFilter);
document.getElementById('stock-filter').addEventListener('change', applyStockFilter);

function applyStockFilter() {
    const search = document.getElementById('stock-search').value.toLowerCase();
    const cat    = document.getElementById('stock-filter').value;
    const filtered = stockData.filter(s =>
        (cat === 'all' || s.category === cat) &&
        s.name.toLowerCase().includes(search)
    );
    renderStock(filtered);
}

// Staff
document.getElementById('staff-search').addEventListener('input', applyStaffFilter);
document.getElementById('staff-filter').addEventListener('change', applyStaffFilter);

function applyStaffFilter() {
    const search = document.getElementById('staff-search').value.toLowerCase();
    const role   = document.getElementById('staff-filter').value;
    const filtered = staffData.filter(s =>
        (role === 'all' || s.role === role) &&
        s.name.toLowerCase().includes(search)
    );
    renderStaff(filtered);
}

// ---- INITIAL RENDER ----
renderPatients(patientsData);
renderWaste(wasteData);
renderStock(stockData);
renderStaff(staffData);
renderOverviewAlerts();

// ---- MODAL HELPERS ----

function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
}

function closeOnOverlay(event, id) {
    if (event.target === event.currentTarget) closeModal(id);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- FORM SUBMISSIONS ----

// Add Patient
document.getElementById('form-patient').addEventListener('submit', function(e) {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    patientsData.unshift({
        name:   document.getElementById('p-name').value,
        age:    parseInt(document.getElementById('p-age').value),
        ward:   document.getElementById('p-ward').value,
        bed:    document.getElementById('p-bed').value,
        date:   document.getElementById('p-date').value || today,
        doctor: document.getElementById('p-doctor').value,
        status: document.getElementById('p-status').value,
    });
    renderPatients(patientsData);
    closeModal('modal-patient');
    this.reset();
    showToast('Patient added successfully!');
});

// Add Waste Entry
document.getElementById('form-waste').addEventListener('submit', function(e) {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    wasteData.unshift({
        date:   document.getElementById('w-date').value || today,
        type:   document.getElementById('w-type').value,
        dept:   document.getElementById('w-dept').value,
        weight: parseFloat(document.getElementById('w-weight').value),
        status: document.getElementById('w-status').value,
    });
    renderWaste(wasteData);
    closeModal('modal-waste');
    this.reset();
    showToast('Waste entry added!');
});

// Add Stock Item
document.getElementById('form-stock').addEventListener('submit', function(e) {
    e.preventDefault();
    stockData.unshift({
        name:     document.getElementById('s-name').value,
        category: document.getElementById('s-category').value,
        qty:      parseInt(document.getElementById('s-qty').value),
        min:      parseInt(document.getElementById('s-min').value),
        unit:     document.getElementById('s-unit').value,
    });
    renderStock(stockData);
    renderOverviewAlerts();
    closeModal('modal-stock');
    this.reset();
    showToast('Stock item added!');
});

// Add Staff Member
document.getElementById('form-staff').addEventListener('submit', function(e) {
    e.preventDefault();
    staffData.unshift({
        name:    document.getElementById('st-name').value,
        role:    document.getElementById('st-role').value,
        dept:    document.getElementById('st-dept').value,
        shift:   document.getElementById('st-shift').value,
        contact: document.getElementById('st-contact').value,
        status:  document.getElementById('st-status').value,
    });
    renderStaff(staffData);
    closeModal('modal-staff');
    this.reset();
    showToast('Staff member added!');
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        ['modal-patient', 'modal-waste', 'modal-stock', 'modal-staff'].forEach(closeModal);
        document.body.style.overflow = '';
    }
});
