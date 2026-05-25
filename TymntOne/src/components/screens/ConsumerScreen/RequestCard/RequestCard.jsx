import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteRequest,
  getAllRequests,
  updateRequest,
} from '../../../../utility/serviceRequestSlice';
import {
  editRequest,
  removeRequest,
  requestFilter,
} from '../../../../../utility/requestFilterSlice';
import {useState} from 'react';
import RequestMenuModal from './RequestMenuModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import EditRequestModal from './EditRequestModal';
import { AcceptRequest } from '../../../../utility/requestSlice/requestSlice';

const RequestCard = () => {
  const dispatch = useDispatch();
  const {allRequests,filteredRequests,isFiltering} = useSelector(state => state.serviceRequestSlice);
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const openMenu = (item) => {
    setSelectedRequest(item);
    setMenuVisible(true);
  };

  const handleDelete = () => {
    dispatch(deleteRequest(selectedRequest._id));
    setDeleteVisible(false);
  };

  const handleUpdate = (newData) => {
    dispatch(updateRequest({id: selectedRequest._id, newData: newData}));
    setEditVisible(false);
  };

  useEffect(() => {
    dispatch(getAllRequests());
  }, []);

  const handleAcceptRequest =(id)=>{
    dispatch(AcceptRequest({id}))
  }

  const displayedRequests = isFiltering ? filteredRequests : allRequests;

  return (
    <>
      <FlatList
        data={displayedRequests || []}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.userInfo}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {item?.consumer_id?.name?.[0]}
                  </Text>
                </View>
                <View>
                  <View style={styles.nameRow}>
                    <Text style={styles.name}>{item?.consumer_id?.name}</Text>

                    <MaterialIcon name="verified" size={16} color="#2563EB" />
                  </View>

                  <Text style={styles.role}>{item?.category}</Text>
                </View>
              </View>
              <View style={styles.rightHeader}>
                <Icon name="clock" size={14} color="#64748B" />
                <Text style={styles.time}>
                  {(() => {
                    const created = new Date(item?.createdAt);
                    const now = new Date();
                    const diff = Math.floor((now - created) / 1000);
                    if (diff < 60) {
                      return `${diff}s`;
                    }
                    if (diff < 3600) {
                      return `${Math.floor(diff / 60)}m`;
                    }
                    if (diff < 86400) {
                      return `${Math.floor(diff / 3600)}h`;
                    }
                    return `${Math.floor(diff / 86400)}d`;
                  })()}
                </Text>
                <TouchableOpacity onPress={() => openMenu(item)}>
                  <MaterialIcon name="more-vert" size={22} color="#334155" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Description */}
            <Text style={styles.description}>{item?.description}</Text>

            {/* Info Row */}
            <View style={styles.infoRow}>
              <View style={styles.tag}>
                <Icon name="map-pin" size={12} color="#334155" />
                <Text style={styles.tagText}>Faridabad</Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  COST : ₹{item?.max_budget}/hr
                </Text>
              </View>

              <View style={styles.tag}>
                <Text style={styles.tagText}>EST.T : 1hr</Text>
              </View>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="bookmark" size={14} color="#334155" />
                <Text style={styles.actionText}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="message-circle" size={14} color="#334155" />
                <Text style={styles.actionText}>Message</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.startBtn}
                onPress={()=>handleAcceptRequest(item._id,)}
              >
                <Text style={styles.startText}>{item?.status}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        scrollEnabled={false}
        nestedScrollEnabled={true}
      />
      <RequestMenuModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onDelete={() => {
          setMenuVisible(false);
          setDeleteVisible(true);
        }}
        onEdit={() => {
          setMenuVisible(false);
          setEditVisible(true);
        }}
      />
      <DeleteConfirmModal
        visible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
        onConfirm={handleDelete}
      />
      <EditRequestModal
        visible={editVisible}
        onClose={() => setEditVisible(false)}
        requestData={selectedRequest}
        onSubmit={handleUpdate}
      />
    </>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginVertical: 4,
    marginHorizontal: 12,
    elevation: 3,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  name: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
  },

  role: {
    fontSize: 12,
    color: '#64748B',
  },

  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  time: {
    fontSize: 12,
    color: '#64748B',
    marginRight: 6,
  },

  description: {
    marginTop: 10,
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
    flexWrap: 'wrap',
  },

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E8F0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  tagText: {
    fontSize: 12,
    color: '#334155',
    marginLeft: 4,
  },

  newBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginLeft: 'auto',
  },

  newText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E8F0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  actionText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#334155',
  },

  startBtn: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  startText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
