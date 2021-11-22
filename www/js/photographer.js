const widget=document.getElementById("widget");function deactivateSelect(e){e.classList.contains("active")&&(e.querySelector(".optList").classList.add("hidden"),e.classList.remove("active"))}function activeSelect(e,t){e.classList.contains("active")||t.forEach(deactivateSelect)}function toggleOptList(e){e.querySelector(".optList").classList.toggle("hidden"),e.classList.toggle("active")}function highlightOption(e,t){e.querySelectorAll(".option").forEach(function(e){e.classList.remove("highlight")}),t.classList.add("highlight")}function updateValue(e,t){var i=e.previousElementSibling,n=e.querySelector(".value"),o=e.querySelectorAll(".option");o.forEach(function(e){e.setAttribute("aria-selected","false")}),o[t].setAttribute("aria-selected","true"),i.selectedIndex=t,n.innerHTML=o[t].innerHTML,highlightOption(e,o[t])}function getIndex(e){return e.previousElementSibling.selectedIndex}console.log(widget),window.addEventListener("load",function(){widget.classList.remove("no-widget"),widget.classList.add("widget")}),window.addEventListener("load",function(){var e=document.querySelectorAll(".select");e.forEach(function(t){t.querySelectorAll(".option").forEach(function(e){e.addEventListener("mouseover",function(){highlightOption(t,e)})}),t.addEventListener("click",function(){toggleOptList(t)}),t.addEventListener("focus",function(){activeSelect(t,e)}),t.addEventListener("blur",function(){deactivateSelect(t)})})}),window.addEventListener("load",function(){document.querySelectorAll(".select").forEach(function(n){var o=n.querySelectorAll(".option"),e=getIndex(n);n.tabIndex=0,n.previousElementSibling.tabIndex=-1,updateValue(n,e),o.forEach(function(e,t){e.addEventListener("click",function(){updateValue(n,t)})}),n.addEventListener("keyup",function(e){var t=o.length,i=getIndex(n);40===e.keyCode&&i<t-1&&i++,38===e.keyCode&&0<i&&i--,13===e.keyCode&&(n.querySelector(".optList").classList.toggle("hidden"),n.classList.toggle("active")),updateValue(n,i)})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvZ3JhcGhlci5qcyJdLCJuYW1lcyI6WyJ3aWRnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGVhY3RpdmF0ZVNlbGVjdCIsInNlbGVjdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicXVlcnlTZWxlY3RvciIsImFkZCIsInJlbW92ZSIsImFjdGl2ZVNlbGVjdCIsInNlbGVjdExpc3QiLCJmb3JFYWNoIiwidG9nZ2xlT3B0TGlzdCIsInRvZ2dsZSIsImhpZ2hsaWdodE9wdGlvbiIsIm9wdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvdGhlciIsInVwZGF0ZVZhbHVlIiwiaW5kZXgiLCJuYXRpdmVXaWRnZXQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidmFsdWUiLCJvcHRpb25MaXN0Iiwic2V0QXR0cmlidXRlIiwic2VsZWN0ZWRJbmRleCIsImlubmVySFRNTCIsImdldEluZGV4IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJJbmRleCIsImUiLCJsZW5ndGgiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFBQSxPQUFBQyxTQUFBQyxlQUFBLFVBV0EsU0FBQUMsaUJBQUFDLEdBRUFBLEVBQUFDLFVBQUFDLFNBQUEsWUFFQUYsRUFBQUcsY0FBQSxZQUVBRixVQUFBRyxJQUFBLFVBRUFKLEVBQUFDLFVBQUFJLE9BQUEsV0FPQSxTQUFBQyxhQUFBTixFQUFBTyxHQUVBUCxFQUFBQyxVQUFBQyxTQUFBLFdBS0FLLEVBQUFDLFFBQUFULGtCQVNBLFNBQUFVLGNBQUFULEdBRUFBLEVBQUFHLGNBQUEsWUFFQUYsVUFBQVMsT0FBQSxVQUNBVixFQUFBQyxVQUFBUyxPQUFBLFVBUUEsU0FBQUMsZ0JBQUFYLEVBQUFZLEdBRUFaLEVBQUFhLGlCQUFBLFdBRUFMLFFBQUEsU0FBQU0sR0FDQUEsRUFBQWIsVUFBQUksT0FBQSxlQUdBTyxFQUFBWCxVQUFBRyxJQUFBLGFBZ0RBLFNBQUFXLFlBQUFmLEVBQUFnQixHQUdBLElBQUFDLEVBQUFqQixFQUFBa0IsdUJBRUFDLEVBQUFuQixFQUFBRyxjQUFBLFVBRUFpQixFQUFBcEIsRUFBQWEsaUJBQUEsV0FFQU8sRUFBQVosUUFBQSxTQUFBTSxHQUNBQSxFQUFBTyxhQUFBLGdCQUFBLFdBR0FELEVBQUFKLEdBQUFLLGFBQUEsZ0JBQUEsUUFFQUosRUFBQUssY0FBQU4sRUFFQUcsRUFBQUksVUFBQUgsRUFBQUosR0FBQU8sVUFFQVosZ0JBQUFYLEVBQUFvQixFQUFBSixJQU1BLFNBQUFRLFNBQUF4QixHQUtBLE9BREFBLEVBQUFrQix1QkFDQUksY0E1SUFHLFFBQUFDLElBQUE5QixRQUVBK0IsT0FBQUMsaUJBQUEsT0FBQSxXQUNBaEMsT0FBQUssVUFBQUksT0FBQSxhQUNBVCxPQUFBSyxVQUFBRyxJQUFBLFlBOERBdUIsT0FBQUMsaUJBQUEsT0FBQSxXQUNBLElBQUFyQixFQUFBVixTQUFBZ0IsaUJBQUEsV0FFQU4sRUFBQUMsUUFBQSxTQUFBUixHQUVBQSxFQUFBYSxpQkFBQSxXQUdBTCxRQUFBLFNBQUFJLEdBQ0FBLEVBQUFnQixpQkFBQSxZQUFBLFdBR0FqQixnQkFBQVgsRUFBQVksT0FJQVosRUFBQTRCLGlCQUFBLFFBQUEsV0FJQW5CLGNBQUFULEtBS0FBLEVBQUE0QixpQkFBQSxRQUFBLFdBSUF0QixhQUFBTixFQUFBTyxLQUdBUCxFQUFBNEIsaUJBQUEsT0FBQSxXQUlBN0IsaUJBQUFDLFNBMENBMkIsT0FBQUMsaUJBQUEsT0FBQSxXQUNBL0IsU0FBQWdCLGlCQUFBLFdBRUFMLFFBQUEsU0FBQVIsR0FDQSxJQUFBb0IsRUFBQXBCLEVBQUFhLGlCQUFBLFdBQ0FTLEVBQUFFLFNBQUF4QixHQUVBQSxFQUFBNkIsU0FBQSxFQUVBN0IsRUFBQWtCLHVCQUFBVyxVQUFBLEVBRUFkLFlBQUFmLEVBQUFzQixHQUdBRixFQUFBWixRQUFBLFNBQUFJLEVBQUFJLEdBQ0FKLEVBQUFnQixpQkFBQSxRQUFBLFdBQ0FiLFlBQUFmLEVBQUFnQixPQUtBaEIsRUFBQTRCLGlCQUFBLFFBQUEsU0FBQUUsR0FDQSxJQUFBQyxFQUFBWCxFQUFBVyxPQUNBZixFQUFBUSxTQUFBeEIsR0FFQSxLQUFBOEIsRUFBQUUsU0FBQWhCLEVBQUFlLEVBQUEsR0FDQWYsSUFHQSxLQUFBYyxFQUFBRSxTQUFBLEVBQUFoQixHQUNBQSxJQUdBLEtBQUFjLEVBQUFFLFVBQ0FoQyxFQUFBRyxjQUFBLFlBRUFGLFVBQUFTLE9BQUEsVUFDQVYsRUFBQUMsVUFBQVMsT0FBQSxXQUVBSyxZQUFBZixFQUFBZ0IiLCJmaWxlIjoicGhvdG9ncmFwaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aWRnZXRcIik7XG5jb25zb2xlLmxvZyh3aWRnZXQpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHR3aWRnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXdpZGdldFwiKTtcblx0d2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRcIik7XG59KTtcblxuLy8gQ2V0dGUgZm9uY3Rpb24gZXN0IHV0aWxpc8OpZSBjaGFxdWUgZm9pcyBxdWUgbm91cyB2b3Vsb25zIGTDqXNhY3RpdmVyIHVuXG4vLyB3aWRnZXQgcGVyc29ubmFsaXPDqS4gRWxsZSBwcmVuZCB1biBwYXJhbcOodHJlXG4vLyBzZWxlY3QgOiBsZSBuxZN1ZCBET00gYXZlYyBsYSBjbGFzc2Ugc2VsZWN0IMOgIGTDqXNhY3RpdmVyXG5mdW5jdGlvbiBkZWFjdGl2YXRlU2VsZWN0KHNlbGVjdCkge1xuXHQvLyBTaSBsZSB3aWRnZXQgbidlc3QgcGFzIGFjdGlmLCBpbCBuJ3kgYSByaWVuIMOgIGZhaXJlXG5cdGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuXHQvLyBOb3VzIGRldm9ucyBvYnRlbmlyIGxhIGxpc3RlIGRlcyBvcHRpb25zIHBvdXIgbGUgd2lkZ2V0IHBlcnNvbm5hbGlzw6lcblx0dmFyIG9wdExpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihcIi5vcHRMaXN0XCIpO1xuXHQvLyBOb3VzIGNhY2hvbnMgbGEgbGlzdGUgZGVzIG9wdGlvbnNcblx0b3B0TGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHQvLyBldCBub3VzIGTDqXNhY3Rpdm9ucyBsZSB3aWRnZXQgcGVyc29ubmFsaXPDqSBsdWktbcOqbWVcblx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5cbi8vIENldHRlIGZvbmN0aW9uIHNlcmEgdXRpbGlzw6llIGNoYXF1ZSBmb2lzIHF1ZSBsJ3V0aWxpc2F0ZXVyIHZldXQgKGRlcylhY3RpdmVyIGxlIHdpZGdldFxuLy8gRWxsZSBwcmVuZCBkZXV4IHBhcmFtw6h0cmVzIDpcbi8vIHNlbGVjdCA6IGxlIG7Fk3VkIERPTSBkZSBsYSBjbGFzc2UgYHNlbGVjdGAgw6AgYWN0aXZlclxuLy8gc2VsZWN0TGlzdCA6IGxhIGxpc3RlIGRlIHRvdXMgbGVzIG7Fk3VkcyBET00gZGUgbGEgY2xhc3NlIGBzZWxlY3RgXG5mdW5jdGlvbiBhY3RpdmVTZWxlY3Qoc2VsZWN0LCBzZWxlY3RMaXN0KSB7XG5cdC8vIFNpIGxlIHdpZGdldCBlc3QgZMOpasOgIGFjdGlmIGlsIG4neSBhIHJpZW4gw6AgZmFpcmVcblx0aWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcblx0Ly8gTm91cyBkZXZvbnMgZMOpc2FjdGl2ZXIgdG91cyBsZXMgd2lkZ2V0cyBwZXJzb25uYWxpc8Opc1xuXHQvLyBjb21tZSBsYSBmb25jdGlvbiBkZWFjdGl2YXRlU2VsZWN0IHJlbXBsaXQgdG91dGVzIGxlcyBmb25jdGlvbm5hbGl0w6lzIGRlIGxhXG5cdC8vIGZvbmN0aW9uIGRlIHJhcHBlbCBmb3JFYWNoLCBub3VzIGwndXRpbGlzb25zIGRpcmVjdGVtZW50IHNhbnMgdXRpbGlzZXJcblx0Ly8gdW5lIGZvbmN0aW9uIGFub255bWUgaW50ZXJtw6lkaWFpcmUuXG5cdHNlbGVjdExpc3QuZm9yRWFjaChkZWFjdGl2YXRlU2VsZWN0KTtcblx0Ly8gRXQgbm91cyBhY3Rpdm9ucyBsJ8OpdGF0IGR1IHdpZGdldCBkb25uw6lcblx0Ly8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbi8vIENldHRlIGZvbmN0aW9uIHNlcmEgdXRpbGlzw6llIGNoYXF1ZSBmb2lzIHF1ZSBsJ3V0aWxpc2F0ZXVyIHZldXQgZW5yb3VsZXIvZMOpcm91bGVyIGxhXG4vLyBsaXN0ZSBkZXMgb3B0aW9uc1xuLy8gRWxsZSBwcmVuZCB1biBwYXJhbcOodHJlIDpcbi8vIHNlbGVjdCA6IGxlIG7Fk3VkIERPTSBkZSBsYSBsaXN0ZSDDoCBiYXNjdWxlclxuZnVuY3Rpb24gdG9nZ2xlT3B0TGlzdChzZWxlY3QpIHtcblx0Ly8gTGEgbGlzdGUgZXN0IHByaXNlIMOgIHBhcnRpciBkdSB3aWRnZXRcblx0dmFyIG9wdExpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvcihcIi5vcHRMaXN0XCIpO1xuXHQvLyBOb3VzIGNoYW5nZW9ucyBsYSBjbGFzc2UgZGUgbGEgbGlzdGUgcG91ciBsJ2Vucm91bGVyL2TDqXJvdWxlclxuXHRvcHRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG4vLyBDZXR0IGZvbmN0aW9uIHNlcmEgdXRpbGlzw6llIGNoYXF1ZSBmb2lzIHF1J2lsIGZhdXQgbWV0dHJlIGVuIHN1cmJyaWxsYW5jZVxuLy8gdW5lIG9wdGlvbi4gIEVsbGUgcHJlbmQgZGV1eCBwYXJhbcOodHJlcyA6XG4vLyBzZWxlY3QgOiBsZSBuxZN1ZCBET00gZGUgbGEgY2xhc3NlIGBzZWxlY3RgXG4vLyAgICAgICAgICBjb250ZW5hbnQgbCdvcHRpb24gw6AgbWV0dHJlIGVuIHN1cmJyaWxsYW5jZVxuLy8gb3B0aW9uIDogbGUgbsWTdWQgRE9NIGRlIGxhIGNsYXNzZSBgb3B0aW9uYCDDoCBtZXR0cmUgZW4gc3VyYnJpbGxhbmNlXG5mdW5jdGlvbiBoaWdobGlnaHRPcHRpb24oc2VsZWN0LCBvcHRpb24pIHtcblx0Ly8gT2J0ZW5pciBsYSBsaXN0ZSBkZSB0b3V0ZXMgbGVzIG9wdGlvbnMgZGlzcG9uaWJsZXMgcG91ciBsJ8OpbMOpbcOpbnQgc8OpbGVjdGlvbm7DqVxuXHR2YXIgb3B0aW9uTGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcblx0Ly8gU3VwcHJpbWVyIGxhIHN1cmJyaWxsYW5jZSBwb3VyIHRvdXRlcyBsZXMgb3B0aW9uc1xuXHRvcHRpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKG90aGVyKSB7XG5cdFx0b3RoZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcblx0fSk7XG5cdC8vIE1ldHRyZSBlbiBzdXJicmlsbGFuY2UgbCdvcHRpb24gY29ycmVjdGVcblx0b3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG59XG5cbi8vIE5vdXMgbGlvbnMgbGUgd2lkZ2V0IGF1eCDDqXbDqW5lbWVudHMgZMOocyBsZSBjaGFyZ2VtZW50IGR1IGRvY3VtZW50XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXHR2YXIgc2VsZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpO1xuXHQvLyBDaGFxdWUgd2lkZ2V0IHBlcnNvbm5hbGlzw6kgZG9pdCDDqnRyZSBpbml0aWFsaXPDqVxuXHRzZWxlY3RMaXN0LmZvckVhY2goZnVuY3Rpb24gKHNlbGVjdCkge1xuXHRcdC8vIGRlIG3Dqm1lIHF1ZSB0b3VzIGxlcyDDqWzDqW1lbnRzIGBvcHRpb25gXG5cdFx0dmFyIG9wdGlvbkxpc3QgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25cIik7XG5cdFx0Ly8gQ2hhcXVlIGZvaXMgcXVlIGwndXRpbGlzYXRldXIgcGFzc2UgbGUgcG9pbnRldXIgZGUgc291cmlzXG5cdFx0Ly8gc3VyIHVuZSBvcHRpb24sIG5vdXMgbWV0dG9ucyBlbiBzdXJicmlsbGFuY2UgbGEgZGl0ZSBvcHRpb25cblx0XHRvcHRpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdFx0b3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyBOb3RlIDogbGVzIHZhcmlhYmxlcyBgc2VsZWN0YCBldCBgb3B0aW9uYCBzb250IGRlcyBcImNsb3N1cmVzXCJcblx0XHRcdFx0Ly8gZGlzcG9uaWJsZXMgZGFucyBsYSBwb3J0w6llIGRlIG5vdHJlIGFwcGVsIGRlIGZvbmN0aW9uLlxuXHRcdFx0XHRoaWdobGlnaHRPcHRpb24oc2VsZWN0LCBvcHRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gQ2hhcXVlIGZvaXMgcXVlIGwndXRpbGlzYXRldXIgY2xpcXVlIHN1ciB1biDDqWzDqW1lbnQgcGVyc29ubmFsaXPDqVxuXHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gTm90ZSA6IGxhIHZhcmlhYmxlIGBzZWxlY3RgIGVzdCB1bmUgXCJjbG9zdXJlXCJcblx0XHRcdC8vIGF2YWlsYWJsZSBkYW5zIGxhIHBvcnTDqWUgZGUgbm90cmUgYXBwZWwgZGUgZm9uY3Rpb24uXG5cdFx0XHQvLyBOb3VzIGJhc2N1bG9ucyBsYSB2aXNpYmlsaXTDqSBkZSBsYSBsaXN0ZSBkZXMgb3B0aW9uc1xuXHRcdFx0dG9nZ2xlT3B0TGlzdChzZWxlY3QpO1xuXHRcdH0pO1xuXHRcdC8vIERhbnMgbGUgY2FzIG/DuSBsZSB3aWRnZXQgb2J0aWVudCBsZSBmb2N1c1xuXHRcdC8vIExlIHdpZGdldCBvYnRpZW50IGxlIGZvY3VzIGNoYXF1ZSBmb2lzIHF1ZSBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSBkZXNzdXNcblx0XHQvLyBvdSBwcmVzc2UgbGEgdG91Y2hlIFRhYiBwb3VyIGF2b2lyIGFjY8OocyBhdSB3aWRnZXRcblx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIE5vdGUgOiBsZXMgdmFyaWFibGUgYHNlbGVjdGAgZXQgYHNlbGVjdExpc3RgIHNvbnQgZGVzIFwiY2xvc3VyZXNcIlxuXHRcdFx0Ly8gZGlzcG9uaWJsZXMgZGFucyBsYSBwb3J0w6llIGRlIG5vdHJlIGFwcGVsIGRlIGZvbmN0aW9uLlxuXHRcdFx0Ly8gTm91cyBhY3Rpdm9ucyBsZSB3aWRnZXRcblx0XHRcdGFjdGl2ZVNlbGVjdChzZWxlY3QsIHNlbGVjdExpc3QpO1xuXHRcdH0pO1xuXHRcdC8vIERhbnMgbGUgY2FzIG/DuSBsZSB3aWRnZXQgcGVyZCBsZSBmb2N1c1xuXHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBOb3RlIDogbGEgdmFyaWFibGUgYHNlbGVjdGAgZXN0IHVuZSBcImNsb3N1cmVcIlxuXHRcdFx0Ly8gZGlzcG9uaWJsZSBkYW5zIGxhIHBvcnTDqWUgZGUgbm90cmUgYXBwZWwgZGUgZm9uY3Rpb24uXG5cdFx0XHQvLyBOb3VzIGTDqXNhY3Rpdm9ucyBsZSB3aWRnZXRcblx0XHRcdGRlYWN0aXZhdGVTZWxlY3Qoc2VsZWN0KTtcblx0XHR9KTtcblx0fSk7XG59KTtcbi8vIENldHRlIGZvbmN0aW9uIG1ldCDDoCBqb3VyIGxhIHZhbGV1ciBhZmZpY2jDqWUgZXQgbGEgc3luY2hyb25pc2UgYXZlYyBjZWxsZVxuLy8gZHUgd2lkZ2V0IG5hdGlmLiBFbGxlIHByZW5kIGRldXggcGFyYW3DqHRyZXMgOlxuLy8gc2VsZWN0IDogbGUgbsWTdWQgRE9NIGRlIGxhIGNsYXNzZSBgc2VsZWN0YCBjb250ZW5hbnQgbGEgdmFsdWVyIMOgIG1ldHRyZSDDoCBqb3VyXG4vLyBpbmRleCAgOiBsJ2luZGV4IGRlIGxhIHZhbGV1ciBjaG9pc2llXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZShzZWxlY3QsIGluZGV4KSB7XG5cdC8vIE5vdXMgZGV2b25zIG9idGVuaXIgbGUgd2lkZ2V0IG5hdGlmIGNvcnJlc3BvbmRhbnQgYXUgd2lkZ2V0IHBlcnNvbm5hbGlzw6lcblx0Ly8gRGFucyBub3RyZSBleGVtcGxlLCBsZSB3aWRnZXQgbmF0aWYgZXN0IHVuIHBhcmVudCBkdSB3aWRnZXQgcGVyc29ubmFsaXPDqVxuXHR2YXIgbmF0aXZlV2lkZ2V0ID0gc2VsZWN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdC8vIE5vdSBkZXZvbnMgYXVzc2kgb2J0ZW5pciBsYSB2YWxldXIgZGUgcmVtcGxhY2VtZW50IGR1IHdpZGdldCBwZXJzb25uYWxpc8OpXG5cdHZhciB2YWx1ZSA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpO1xuXHQvLyBFdCBub3VzIGF2b25zIGJlc29pbiBkZSB0b3V0ZSBsYSBsaXN0ZSBkZXMgb3B0aW9uc1xuXHR2YXIgb3B0aW9uTGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcblx0Ly8gTm91cyBub3VzIGFzc3Vyb25zIHF1J2F1Y3VuZSBvcHRpb24gbidlc3Qgc8OpbGVjdGlvbm7DqWVcblx0b3B0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChvdGhlcikge1xuXHRcdG90aGVyLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgXCJmYWxzZVwiKTtcblx0fSk7XG5cdC8vIE5vdXMgbm91cyBhc3N1cm9ucyBxdWUgbCdvcHRpb24gY2hvaXNpZSBlc3Qgc8OpbGVjdGlvbm7DqWVcblx0b3B0aW9uTGlzdFtpbmRleF0uc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcInRydWVcIik7XG5cdC8vIE5vdXMgZMOpZmluaXNzb25zIGwnaW5kZXggY2hvaXNpIMOgIGwnaW5kZXggZHUgY2hvaXhcblx0bmF0aXZlV2lkZ2V0LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcblx0Ly8gTm91cyBtZXR0b25zIMOgIGpvdXIgbGEgdmFsZXVyIGRlIHJlbXBsYWNlbWVudCBlbiBhY2NvcmRcblx0dmFsdWUuaW5uZXJIVE1MID0gb3B0aW9uTGlzdFtpbmRleF0uaW5uZXJIVE1MO1xuXHQvLyBFdCBub3VzIG1ldHRvbnMgZW4gc3VyYnJpbGxhbmNlIGwnb3B0aW9uIGNvcnJlc3BvbmRhbnRlIGR1IHdpZGdldCBwZXJzb25uYWxpc8OpXG5cdGhpZ2hsaWdodE9wdGlvbihzZWxlY3QsIG9wdGlvbkxpc3RbaW5kZXhdKTtcbn1cblxuLy8gQ2V0dGUgZm9uY3Rpb24gcmVudm9pZSBsJ2luZGV4IGNvdXJhbnQgZGFucyBsZSB3aWRnZXQgbmF0aWZcbi8vIEVsbGUgcHJlbmQgdW4gcGFyYW3DqHRyZSA6XG4vLyBzZWxlY3QgOiBsZSBuxZN1ZCBET00gYXZlYyBsYSBjbGFzc2UgYHNlbGVjdGAgcmVsYXRpdmUgYXUgd2lkZ2V0IG5hdGlmXG5mdW5jdGlvbiBnZXRJbmRleChzZWxlY3QpIHtcblx0Ly8gTm91cyBhdm9ucyBiZXNvaW4gZCdhdm9pciBhY2PDqHMgYXUgd2lkZ2V0IG5hdGlmIHBvdXIgbGUgd2lkZ2V0IHBlcnNvbm5hbGlzw6lcblx0Ly8gRGFucyBub3RyZSBleGVtcGxlLCBsZSB3aWRnZXQgbmF0aWYgZXN0IHVuIHBhcmVudCBkdSB3aWRnZXQgcGVyc29ubmFsaXPDqVxuXG5cdHZhciBuYXRpdmVXaWRnZXQgPSBzZWxlY3QucHJldmlvdXNFbGVtZW50U2libGluZztcblx0cmV0dXJuIG5hdGl2ZVdpZGdldC5zZWxlY3RlZEluZGV4O1xufVxuXG4vLyBOb3VzIGxpb25zIGxlIHdpZGdldCBhdXggw6l2w6luZW1lbnRzIGTDqHMgbGUgY2hhcmdlbWVudCBkdSBkb2N1bWVudFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcblx0dmFyIHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdFwiKTtcblx0Ly8gQ2hhcXVlIHdpZGdldCBwZXJzb25uYWxpc8OpIGRvaXQgw6p0cmUgaW5pdGlhbGlzw6lcblx0c2VsZWN0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3QpIHtcblx0XHR2YXIgb3B0aW9uTGlzdCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKSxcblx0XHRcdHNlbGVjdGVkSW5kZXggPSBnZXRJbmRleChzZWxlY3QpO1xuXHRcdC8vIE5vdXMgcmVuZG9ucyBsZSB3aWRnZXQgcGVyc29ubmFsaXPDqSBjYXBhYmxlIGQnYXZvaXIgbGUgZm9jdXNcblx0XHRzZWxlY3QudGFiSW5kZXggPSAwO1xuXHRcdC8vIE5vdXMgZmFpc29ucyBlbiBzb3J0ZSBxdWUgbGUgd2lkZ2V0IG5hdGlmIG5lIHB1aXNzZSBwbHVzIGF2b2lyIGxlIGZvY3VzXG5cdFx0c2VsZWN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGFiSW5kZXggPSAtMTtcblx0XHQvLyBOb3VzIG5vdXMgYXNzdXJvbnMgcXVlIGxhIHZhbGV1ciBzw6lsZWN0aW9ubsOpZSBwYXIgZMOpZmF1dCBlc3QgYmllbiBhZmZpY2jDqWVcblx0XHR1cGRhdGVWYWx1ZShzZWxlY3QsIHNlbGVjdGVkSW5kZXgpO1xuXHRcdC8vIENoYXF1ZSBmb2lzIHF1ZSBsJ3V0aWxpc2F0ZXVyIGNsaXF1ZSBzdXIgdW5lIG9wdGlvbiwgbm91cyBtZXR0b25zIMOgXG5cdFx0Ly8gam91ciBsYSB2YWxldXIgZW4gYWNjb3JkXG5cdFx0b3B0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dXBkYXRlVmFsdWUoc2VsZWN0LCBpbmRleCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBDaGFxdWUgZm9pcyBxdWUgbCd1dGlsaXNhdGV1ciB1dGlsaXNlIGxlIGNsYXZpZXIgc3VyIHVuIHdpZGdldFxuXHRcdC8vIGF2ZWMgZm9jdXMsIGxlcyB2YWxldXJzIHNvbnQgbWlzZXMgw6Agam91ciBlbiBhY2NvcmRcblx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR2YXIgbGVuZ3RoID0gb3B0aW9uTGlzdC5sZW5ndGgsXG5cdFx0XHRcdGluZGV4ID0gZ2V0SW5kZXgoc2VsZWN0KTtcblx0XHRcdC8vIFF1YW5kIGwndXRpbGlzYXRldXIgcHJlc3NlIOKHkywgbm91cyBhbGxvbnMgw6AgbCdvcHRpb24gc3VpdmFudGVcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDQwICYmIGluZGV4IDwgbGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUXVhbmQgbCd1dGlsaXNhdGV1ciBwcmVzc2Ug4oeRLCBub3VzIHNhdXRvbnMgw6AgbCdvcHRpb24gc3VpdmFudGVcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM4ICYmIGluZGV4ID4gMCkge1xuXHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUXVhbmQgbCd1dGlsaXNhdGV1ciBwcmVzc2UgZW50ZXIsIG5vdXMgbWV0dG9ucyDDoCBqb3VyIGxhIHZhbGV1ciBlbiBhY2NvcmRcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG5cdFx0XHRcdHZhciBvcHRMaXN0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXCIub3B0TGlzdFwiKTtcblx0XHRcdFx0Ly8gTm91cyBjaGFuZ2VvbnMgbGEgY2xhc3NlIGRlIGxhIGxpc3RlIHBvdXIgbCdlbnJvdWxlci9kw6lyb3VsZXJcblx0XHRcdFx0b3B0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuXHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblx0XHRcdH1cblx0XHRcdHVwZGF0ZVZhbHVlKHNlbGVjdCwgaW5kZXgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl19
