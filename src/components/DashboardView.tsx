import React, { useState } from 'react';
import { 
  LogOut, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  ShieldCheck, 
  Search, 
  Download,
  AlertCircle,
  Zap
} from 'lucide-react';
import { AccountInfo, Transaction } from '../types';

interface DashboardViewProps {
  userId: string;
  onLogOff: () => void;
  onLinkClick: (name: string) => void;
}

const mockAccounts: AccountInfo[] = [
  {
    id: 'acc-1',
    name: 'Main Recharge Wallet',
    type: 'Primary Account',
    accountNumber: '45892011',
    sortCode: '30-90-89',
    balance: 2845.50,
    availableBalance: 2845.50,
    currency: '£',
  },
  {
    id: 'acc-2',
    name: 'Savings & Rewards Vault',
    type: 'Bonus Balance',
    accountNumber: '89104423',
    sortCode: '30-90-89',
    balance: 5120.00,
    availableBalance: 5120.00,
    currency: '£',
  },
  {
    id: 'acc-3',
    name: 'Prepaid Virtual Card',
    type: 'Digital Card',
    accountNumber: '•••• 7812',
    sortCode: 'Card',
    balance: -420.50,
    availableBalance: 3579.50,
    currency: '£',
  },
];

const mockTransactions: Transaction[] = [
  {
    id: 'tx-1',
    date: 'Today, 31 Oct',
    description: 'Tesco Superstore - London',
    category: 'Groceries',
    amount: 42.80,
    type: 'debit',
    balanceAfter: 2845.50,
  },
  {
    id: 'tx-2',
    date: '30 Oct 2026',
    description: 'Transport for London Oystercard',
    category: 'Travel',
    amount: 3.40,
    type: 'debit',
    balanceAfter: 2888.30,
  },
  {
    id: 'tx-3',
    date: '28 Oct 2026',
    description: 'Monthly Salary - ACME Corp',
    category: 'Income',
    amount: 2450.00,
    type: 'credit',
    balanceAfter: 2891.70,
  },
  {
    id: 'tx-4',
    date: '27 Oct 2026',
    description: 'Netflix UK Digital Subscription',
    category: 'Entertainment',
    amount: 10.99,
    type: 'debit',
    balanceAfter: 441.70,
  },
  {
    id: 'tx-5',
    date: '25 Oct 2026',
    description: 'British Gas Energy Direct Debit',
    category: 'Utilities',
    amount: 115.00,
    type: 'debit',
    balanceAfter: 452.69,
  },
];

export const DashboardView: React.FC<DashboardViewProps> = ({ userId, onLogOff, onLinkClick }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = mockTransactions.filter(
    (tx) =>
      tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Authenticated Top Bar */}
      <header className="bg-[#006a4e] text-white shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-wider uppercase font-sans">
              RECHARD FORM
            </span>
            <div className="w-8 h-8 bg-white text-[#006a4e] rounded-[4px] p-1.5 flex items-center justify-center shadow-xs flex-shrink-0">
              <Zap className="w-full h-full fill-[#006a4e]" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <span className="text-xs text-green-100 block">Logged in as</span>
              <span className="text-sm font-bold text-white font-mono">{userId}</span>
            </div>
            <button
              type="button"
              onClick={onLogOff}
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-[2px] border border-white/30 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Off</span>
            </button>
          </div>
        </div>

        {/* Secondary Subnav */}
        <div className="bg-[#005a42] border-t border-[#004e38]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center space-x-1 sm:space-x-4 py-2">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 font-semibold rounded-none cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-white text-[#006a4e]'
                    : 'text-white hover:bg-[#004d37]'
                }`}
              >
                Accounts Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('transactions')}
                className={`px-3 py-1 font-semibold rounded-none cursor-pointer ${
                  activeTab === 'transactions'
                    ? 'bg-white text-[#006a4e]'
                    : 'text-white hover:bg-[#004d37]'
                }`}
              >
                Transactions
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-green-100">
              <ShieldCheck className="w-3.5 h-3.5 text-green-300" />
              <span>Rechard Form Protected</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Authenticated Content */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1">
        {/* Welcome greeting card */}
        <div className="bg-white p-5 sm:p-6 border border-slate-300 shadow-xs mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Welcome back to your accounts
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Last logon: <strong className="text-slate-800">Today at 10:14 AM</strong> · Security status: Active
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onLinkClick('Make a Payment')}
              className="bg-[#006a4e] hover:bg-[#00523d] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-[2px] transition-colors cursor-pointer"
            >
              Pay &amp; Transfer
            </button>
            <button
              type="button"
              onClick={() => onLinkClick('Download Statements')}
              className="border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium px-3 py-2 rounded-[2px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Statements</span>
            </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <div className="space-y-6">
            {/* Account Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {mockAccounts.map((account) => (
                <div
                  key={account.id}
                  className="bg-white border border-slate-300 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-bold text-slate-900 text-base">{account.name}</h2>
                        <p className="text-xs text-slate-500 mt-0.5">{account.type}</p>
                      </div>
                      <CreditCard className="w-5 h-5 text-[#006a4e]" />
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>Sort code: <strong className="text-slate-800">{account.sortCode}</strong></span>
                      <span>Account: <strong className="text-slate-800">{account.accountNumber}</strong></span>
                    </div>

                    <div className="mt-5">
                      <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Balance
                      </span>
                      <p className="text-2xl font-bold text-slate-900 mt-0.5">
                        {account.balance < 0 ? `-£${Math.abs(account.balance).toFixed(2)}` : `£${account.balance.toFixed(2)}`}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Available: <span className="font-semibold text-slate-700">£{account.availableBalance.toFixed(2)}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onLinkClick(`Manage ${account.name}`)}
                      className="text-xs font-semibold text-[#006a4e] hover:underline cursor-pointer"
                    >
                      Manage Account
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('transactions')}
                      className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                    >
                      Transactions &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Activity Table */}
            <div className="bg-white border border-slate-300 shadow-xs p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 text-base">Recent Activity (Club Lloyds)</h3>
                <button
                  type="button"
                  onClick={() => setActiveTab('transactions')}
                  className="text-xs font-semibold text-[#006a4e] hover:underline cursor-pointer"
                >
                  View all activity
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Description</th>
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3 text-right">Amount</th>
                      <th className="py-2.5 px-3 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mockTransactions.slice(0, 4).map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50">
                        <td className="py-3 px-3 text-slate-600 font-medium whitespace-nowrap">{tx.date}</td>
                        <td className="py-3 px-3 text-slate-900 font-semibold">{tx.description}</td>
                        <td className="py-3 px-3 text-slate-500">{tx.category}</td>
                        <td className={`py-3 px-3 text-right font-semibold whitespace-nowrap ${
                          tx.type === 'credit' ? 'text-emerald-700' : 'text-slate-900'
                        }`}>
                          {tx.type === 'credit' ? `+£${tx.amount.toFixed(2)}` : `-£${tx.amount.toFixed(2)}`}
                        </td>
                        <td className="py-3 px-3 text-right text-slate-600 whitespace-nowrap">
                          £{tx.balanceAfter.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Full Transactions View */
          <div className="bg-white border border-slate-300 shadow-xs p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="font-bold text-slate-900 text-lg">Transaction History</h2>
                <p className="text-xs text-slate-500">Club Lloyds Account (30-90-89 · 45892011)</p>
              </div>

              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 border border-slate-300 text-xs sm:text-sm rounded-none focus:outline-slate-900"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Description</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                    <th className="py-2.5 px-3 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 text-slate-600 font-medium whitespace-nowrap">{tx.date}</td>
                      <td className="py-3 px-3 text-slate-900 font-semibold flex items-center gap-2">
                        {tx.type === 'credit' ? (
                          <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        )}
                        <span>{tx.description}</span>
                      </td>
                      <td className="py-3 px-3 text-slate-500">{tx.category}</td>
                      <td className={`py-3 px-3 text-right font-semibold whitespace-nowrap ${
                        tx.type === 'credit' ? 'text-emerald-700' : 'text-slate-900'
                      }`}>
                        {tx.type === 'credit' ? `+£${tx.amount.toFixed(2)}` : `-£${tx.amount.toFixed(2)}`}
                      </td>
                      <td className="py-3 px-3 text-right text-slate-600 whitespace-nowrap">
                        £{tx.balanceAfter.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Security advisory bar */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900">
            <p className="font-bold">Always protect your account</p>
            <p className="mt-0.5">
              Remember, Rechard Form will never call you to ask for your password, full PIN or security codes.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#006a4e] text-white py-6 border-t border-[#00553e] mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p>© 2026 Rechard Form Portal. All rights reserved.</p>
          <button
            type="button"
            onClick={onLogOff}
            className="text-green-100 hover:text-white underline cursor-pointer"
          >
            End Session
          </button>
        </div>
      </footer>
    </div>
  );
};
