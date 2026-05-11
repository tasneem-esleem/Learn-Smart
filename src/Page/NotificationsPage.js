import { useState, useEffect } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) { setNotifications([]); return; }

      const res = await fetch("https://api-zyzn.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : (data.notifications || []));
    } catch (err) {
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotifications(); }, []);

  if (loading) return (
    <div className="bg-white min-h-screen py-6 px-4 md:py-10 md:px-28 animate-pulse" dir="ltr">
      <div className="max-w-5xl mx-auto space-y-4">
        <div className="h-10 w-40 bg-gray-100 rounded-lg mb-8"></div>
        {[1, 2, 3].map(i => <div key={i} className="h-24 w-full bg-gray-50 rounded-[24px]"></div>)}
      </div>
    </div>
  );

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-6 px-4 md:py-10 md:px-12 lg:px-28" dir="ltr">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - متجاوب */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 px-2">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-bold text-black leading-none">Notifications</h1>
            <p className="text-gray-400 text-xs md:text-sm mt-2">Stay updated with your latest activities</p>
          </div>
          <button className="text-[#3ab694] text-sm font-semibold hover:text-[#2d8f74] whitespace-nowrap">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex flex-col gap-3 md:gap-4">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`flex items-start sm:items-center justify-between p-4 md:p-6 rounded-[20px] md:rounded-[28px] transition-all border 
                  ${!n.read ? "bg-[#f8fdfb] border-[#eafaf4] shadow-sm" : "bg-white border-gray-50 opacity-90"}`}
              >
                <div className="flex items-start sm:items-center gap-3 md:gap-5 w-full">
                  <div className="relative flex-shrink-0">
                    <img
                      src={n.avatar || "https://via.placeholder.com/60"}
                      alt={n.from}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-[15px] md:rounded-[20px] object-cover shadow-sm"
                    />
                    {!n.read && (
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-[#3ab694] border-2 md:border-4 border-[#f8fdfb] rounded-full"></span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 font-bold text-[14px] md:text-[16px] leading-tight break-words">
                      {n.from} 
                      <span className="font-normal text-gray-500 ml-1.5">{n.message}</span>
                    </p>
                    <p className="text-[10px] md:text-[12px] text-gray-400 mt-1">{n.time}</p>
                  </div>
                </div>

                {!n.read && (
                  <div className="hidden sm:block w-2.5 h-2.5 bg-[#3ab694] rounded-full flex-shrink-0 ml-4"></div>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 md:py-24 bg-white rounded-[30px] border border-dashed border-gray-100 px-6 text-center">
              <p className="text-gray-400 font-medium text-base md:text-lg">No notifications yet</p>
              <p className="text-gray-300 text-xs md:text-sm mt-1">When you get alerts, they'll appear here.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}