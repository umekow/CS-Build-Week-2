function CompareLists(llist1, llist2) {
  while (llist1 !== null && llist2 !== null) {
    if ((llist1.next && !llist2.next) || (!llist1.next && llist2.next)) {
      return 0;
    }

    if (llist1.data === llist2.data) {
      llist1 = llist1.next;
      llist2 = llist2.next;
    } else {
      return 0;
    }
  }
  return 1;
}
