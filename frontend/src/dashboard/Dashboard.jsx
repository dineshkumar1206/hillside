import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, Home, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { logout } from '../store/slices/authSlice.js';
import { fetchLeadsAsync, deleteLeadAsync, clearLeads } from '../store/slices/leadsSlice.js';
import DashboardKPI from './DashboardKPI.jsx';
import DashboardChart from './DashboardChart.jsx';
import LeadTable from './LeadTable.jsx';
import LeadDrawer from './LeadDrawer.jsx';

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const token = useSelector(state => state.auth.token);
  const email = useSelector(state => state.auth.email) || 'Admin';
  const loading = useSelector(state => state.leads.loading);
  const error = useSelector(state => state.leads.error);

  const [selectedLead, setSelectedLead] = useState(null);
  const [deleteConfirmLead, setDeleteConfirmLead] = useState(null);

  // Auto redirect to login page if no auth token is stored
  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    dispatch(fetchLeadsAsync(token));
  }, [token, navigate, dispatch]);

  const handleRefresh = () => {
    if (token) {
      dispatch(fetchLeadsAsync(token));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearLeads());
    navigate('/login');
  };

  const handleConfirmDelete = (lead) => {
    setDeleteConfirmLead(lead);
  };

  const handleDeleteExecute = () => {
    if (deleteConfirmLead && token) {
      dispatch(deleteLeadAsync(deleteConfirmLead.id, token));
      setDeleteConfirmLead(null);
      if (selectedLead && selectedLead.id === deleteConfirmLead.id) {
        setSelectedLead(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans antialiased">
      {/* Top Header Section */}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#7fff00]/10 border border-[#7fff00]/30 rounded-xl p-2 text-[#7fff00]">
            <Home size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">Hillside</h1>
            <p className="text-xs text-slate-400">Lead Administration Hub</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-semibold text-slate-200">{email}</span>
            <span className="text-[10px] text-green-400 uppercase font-bold tracking-wider">Super Administrator</span>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-950/40 hover:bg-red-900/40 text-red-300 border border-red-900/40 px-3.5 py-2 rounded-xl text-sm transition-all duration-200 cursor-pointer"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Dashboard body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        
        {/* Metric Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Leads Overview</h2>
            <p className="text-sm text-slate-400">Manage real-time buyer inquiries and callback schedules.</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2 rounded-xl text-sm transition-all cursor-pointer disabled:opacity-60"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
        </div>

        {/* Global Connection Error notification */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Backend Connection Issue</p>
              <p className="text-sm mt-0.5 text-red-200/80">{error}</p>
            </div>
          </div>
        )}

        {/* KPIs display */}
        <DashboardKPI />

        {/* Chart + Helper instructions grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DashboardChart />
          </div>
          <div className="bg-slate-950/30 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">System Actions Guideline</h3>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></span>
                  <p>Incoming client requests are initially set to <strong className="text-yellow-400 font-medium">New</strong>.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></span>
                  <p>Mark leads as contacted by toggling their status to <strong className="text-blue-400 font-medium">Contacted</strong>.</p>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"></span>
                  <p>Permanently remove test registrations using the <strong className="text-red-400 font-medium">Delete</strong> trash bin action.</p>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-3 border border-slate-800 mt-4 text-[11px] text-[#7fff00] font-semibold flex items-center gap-2">
              <CheckCircle size={14} />
              Local Database Synchronized
            </div>
          </div>
        </div>

        {/* Leads Table listing */}
        <LeadTable 
          onInspectLead={(lead) => setSelectedLead(lead)} 
          onConfirmDelete={handleConfirmDelete} 
        />
      </main>

      {/* Inspect Lead drawer panel */}
      <LeadDrawer 
        lead={selectedLead} 
        onClose={() => setSelectedLead(null)} 
        onDeleteConfirm={handleConfirmDelete} 
      />

      {/* Delete Confirmation Modal Dialog */}
      {deleteConfirmLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative animate-scale-in">
            <h3 className="text-md font-bold text-white mb-2">Delete Lead Record?</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Are you sure you want to permanently delete lead record of <strong className="text-slate-200 font-semibold">{deleteConfirmLead.name}</strong>? This database action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirmLead(null)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-4 py-2 rounded-xl text-xs cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteExecute}
                className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-xl text-xs cursor-pointer transition-colors font-bold"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
