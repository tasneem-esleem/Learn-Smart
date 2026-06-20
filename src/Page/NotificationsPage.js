import { useState, useEffect } from "react";
import { useAuth } from "../Context/UserContext";

export default function NotificationsPage() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([
  { id: 1, isRead: false, avatar: "", title: "Test Title", message: "Hello testing", time: "Just now" }
]);
  const [loading, setLoading] = useState(true);
  
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("userToken");
      if (!token) {
        setNotifications([]);
        return;
      }

      const res = await fetch(
        "https://educational-platform-backend-935l.onrender.com/api/notifications",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      const data = await res.json();
      console.log("البيانات القادمة من السيرفر:", data);
      const rawData = Array.isArray(data) ? data : (data.notifications || []);

      const formattedData = rawData.map((n) => ({
        id: n._id,
        isRead: n.isRead ?? false,
        avatar: n.avatar || "https://via.placeholder.com/60",
        title: n.title || "No Title",
        message: n.message || "No Message",
        time: n.createdAt ? new Date(n.createdAt).toLocaleString() : "Recently"
      
      }));

      setNotifications(formattedData);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  if (loading) {
    return (
      <div className="bg-white min-h-screen py-6 px-4 md:py-10 md:px-28 animate-pulse" dir="ltr">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="h-10 w-40 bg-gray-100 rounded-lg mb-8"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 w-full bg-gray-50 rounded-[24px]"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-6 px-4 md:py-10 md:px-12 lg:px-28" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 px-2">
          <h1 className="text-[24px] md:text-[32px] font-bold text-black leading-none">
            Notifications
          </h1>
          <button className="text-black text-sm font-semibold hover:text-[#2d8f74] whitespace-nowrap">
            Mark all as read
          </button>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`flex items-start sm:items-center justify-between p-4 md:p-6 rounded-[20px] md:rounded-[28px] transition-all border shadow-lg
                  ${!n.isRead ? "bg-[#f8fdfb] shadow-lg border-[#eafaf4]" : "bg-white border-gray-50 opacity-90 shadow-lg"}`}
              >
                <div className="flex items-start sm:items-center gap-3 md:gap-5 w-full">
                  <div className="relative flex-shrink-0">
                    <img
                      src={n.avatar}
                      alt={n.title}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-[15px] md:rounded-[20px] object-cover shadow-sm"
                    />
                    {!n.isRead && (
                      <span className="absolute -top-0.5 -right-0.5 w-3 h-3 md:w-4 md:h-4 bg-[#3ab694] border-2 md:border-4 border-[#f8fdfb] rounded-full"></span>
                    )}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <p className="text-gray-800 font-bold text-[14px] md:text-[16px] leading-tight break-words">
                      {n.title}
                      <span className="font-normal text-gray-500 ml-1.5">{n.message}</span>
                    </p>
                    <p className="text-[10px] md:text-[12px] text-gray-400 mt-1 block text-start">
                      {n.time}
                    </p>
                  </div>
                </div>

                {!n.isRead && (
                  <div className="hidden sm:block w-2.5 h-2.5 bg-[#3ab694] rounded-full flex-shrink-0 ml-4"></div>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 md:py-24 bg-white rounded-[30px] border border-dashed border-gray-100 px-6 text-center">
              <p className="text-gray-400 font-medium text-base md:text-lg">No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}