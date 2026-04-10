document.addEventListener('DOMContentLoaded', () => {
    // Mock Data based on the screenshot
    const campaigns = [
        {
            id: '50454',
            sort: 1,
            status: 'active',
            type: '系统 (有专页)',
            period: '26/04/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            activityType: '-',
            name: '救援金周结算星期一',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
            winCount: '0/2',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: 'pc_preview.png',
            h5Image: 'h5_preview.png'
        },
        {
            id: '50458',
            sort: 4,
            status: 'active',
            type: '自定义',
            period: '26/03/18 至 50/12/31',
            currency: 'VND',
            language: '英文 越南',
            template: '自定义模板',
            activityType: '推广活动',
            name: '12344444443',
            preview: true,
            blacklist: '--',
            designatedAgent: '--',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50461',
            sort: 1,
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/03/23 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '救援金活动',
            activityType: '-',
            name: '救援金-百分比 0',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商C',
            winCount: '374/8',
            withdrawRatio: '--',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50465',
            sort: 5,
            status: 'active',
            type: '系统 (有专页)',
            period: '26/04/10 至 51/01/01',
            currency: 'VND',
            language: '簡體中文',
            template: '砸金蛋活动',
            activityType: '-',
            name: '每日签到奖励',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商A',
            winCount: '120/5',
            withdrawRatio: '50%',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50470',
            sort: 2,
            status: 'active',
            type: '系統 (有專頁)',
            period: '26/05/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '连续性活动',
            activityType: '连续任务',
            name: '节日红包雨',
            preview: true,
            blacklist: '层级A',
            designatedAgent: '代理商A',
            winCount: '500/10',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50475',
            sort: 6,
            status: 'active',
            type: '自定义',
            period: '26/06/01 至 50/12/31',
            currency: 'VND',
            language: '英语 越南',
            template: '自定义模板2',
            activityType: '促销',
            name: '特殊促销案',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商B',
            winCount: '50/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50480',
            sort: 7,
            status: 'inactive',
            type: '系统 (无专页)',
            period: '26/07/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '每天登錄活動',
            activityType: '每日登錄',
            name: '已关闭的旧活动',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商C',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            minRechargeAmount: '5,000',
            minRechargeCount: '1',
            rechargeSort: '--',
            pcImage: null,
            h5Image: null
        },
        {
            id: '50490',
            sort: 3,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/08/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '充值優惠活動',
            activityType: '充值优惠',
            name: '周六充值大放送',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
            winCount: '1000/20',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账/USDT',
            rechargeCategory: '首充',
            minRechargeAmount: '20,000',
            minRechargeCount: '1',
            rechargeSort: '1'
        },
        {
            id: '50500',
            sort: 8,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/09/01 至 51/01/01',
            currency: 'VND',
            language: '英语',
            template: '充值優惠活動',
            activityType: '充值优惠',
            name: '月底充值大回馈',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商B',
            winCount: '2000/50',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: 'USDT',
            rechargeCategory: '累充',
            minRechargeAmount: '100,000',
            minRechargeCount: '2',
            rechargeSort: '2',
            h5Image: 'https://picsum.photos/100/50?random=1',
            pcImage: 'https://picsum.photos/150/50?random=2'
        },
        {
            id: '50510',
            sort: 9,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/10/01 至 51/01/01',
            currency: 'VND',
            language: '越南',
            template: '充值優惠活動',
            activityType: '首充奖励',
            name: '新人首充大礼包',
            preview: true,
            blacklist: '层级A',
            designatedAgent: '代理商C',
            winCount: '500/30',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: '银行转账',
            rechargeCategory: '首充',
            minRechargeAmount: '50,000',
            minRechargeCount: '1',
            rechargeSort: '3',
            h5Image: 'https://picsum.photos/100/50?random=3'
        },
        {
            id: '50520',
            sort: 10,
            status: 'active',
            type: '系统 (无专页)',
            period: '26/10/15 至 51/01/01',
            currency: 'VND',
            language: '簡體中文',
            template: '充值優惠活動',
            activityType: '累充返利',
            name: '累计充值返大奖',
            preview: true,
            blacklist: '默认层',
            designatedAgent: '代理商A',
            winCount: '800/45',
            withdrawRatio: '100%',
            auditFailFee: '100%',
            rechargeType: 'USDT/銀行轉帳',
            rechargeCategory: '累充',
            minRechargeAmount: '200,000',
            minRechargeCount: '5',
            rechargeSort: '4'
        },
        {
            id: '50530',
            sort: 11,
            status: 'inactive',
            type: '系统 (无专页)',
            period: '26/11/01 至 50/12/31',
            currency: 'VND',
            language: '英语',
            template: '充值優惠活動',
            activityType: '限时加赠',
            name: '双11充值加赠',
            preview: false,
            blacklist: '层级A',
            designatedAgent: '代理商B',
            winCount: '0/0',
            withdrawRatio: '--',
            auditFailFee: '--',
            rechargeType: '银行转账',
            rechargeCategory: '限时',
            minRechargeAmount: '30,000',
            minRechargeCount: '1',
            rechargeSort: '5'
        }
    ];

    // State Management
    let isTemplateExpanded = false;
    let isRechargeTypeExpanded = false;
    let sortConfig = { key: null, direction: 'asc' };

    // Code Mapping for Sorting (Priority: SY > SN > CU, then trailing number ascending)
    const getSortWeight = (str) => {
        if (!str) return 999999;
        str = String(str);
        let weight = 0;
        // Check exact prefix or type match
        if (str.includes('SY') || str.includes('有')) weight = 100000;
        else if (str.includes('SN') || str.includes('无') || str.includes('無')) weight = 200000;
        else if (str.includes('CU') || str.includes('自')) weight = 300000;
        else weight = 900000;

        // Parse and add numeric trailing part
        const numMatch = str.match(/\d+/);
        if (numMatch) {
            weight += parseInt(numMatch[0], 10);
        }
        return weight;
    };

    const tableBody = document.getElementById('campaignTableBody');
    const featuredTableBody = document.getElementById('featuredTableBody');

    // Helper to get display type and badge
    const getTypeDisplay = (type) => {
        let badgeClass = 'badge-custom';
        let displayType = '自定义';
        let group = 'mixed'; // 'sy' for 有专页, 'mixed' for 无专页+自定义

        if (type.includes('有')) {
            badgeClass = 'badge-system';
            displayType = '系統（有专页）';
            group = 'sy';
        } else if (type.includes('无') || type.includes('無')) {
            badgeClass = 'badge-system-none';
            displayType = '系統（无专页）';
            group = 'mixed';
        }
        return { badgeClass, displayType, group };
    };

    // Track if activity type and sort columns are expanded
    let isTemplateColumnsExpanded = false;

    // Track current tab (promotion or featured)
    let currentTab = 'promotion';
    
    // Separate data storage for each tab to keep them independent
    let promotionData = [];
    let featuredData = [];

    // Render Table Rows
    const renderTable = (data) => {
        if (currentTab === 'promotion') {
            tableBody.innerHTML = '';
            data.forEach(item => {
                item.displaySort = item.sort;
                renderPromotionRow(item);
            });
        } else {
            featuredTableBody.innerHTML = '';
            data.forEach(item => {
                item.displaySort = item.sort;
                renderFeaturedRow(item);
            });
        }

        // Restore column visibility state
        updateColumnVisibility();
    };

    // Helper function to update column visibility based on expanded state
    const updateColumnVisibility = () => {
        const hiddenCols = document.querySelectorAll('th.hidden-col, td.hidden-col');
        hiddenCols.forEach(col => {
            if (isTemplateColumnsExpanded) {
                col.classList.add('visible');
            } else {
                col.classList.remove('visible');
            }
        });
    };

    // Check if template is a recharge-type activity
    const isRechargeTemplate = (template) => {
        const rechargeTemplates = ['充值優惠活動', '充值优惠活动', '周充值优惠活动'];
        return rechargeTemplates.some(t => template && template.includes('充值'));
    };

    // Render a preview image cell with + button for uploading, or an existing image with an edit button
    const renderPreviewImageCell = (item, imageType) => {
        const label = imageType === 'h5' ? 'H5' : 'PC';
        const imgUrl = imageType === 'h5' ? item.h5Image : item.pcImage;

        if (imgUrl) {
            return `
                <div class="preview-img-cell">
                    <div class="preview-img-uploaded" onclick="openPreviewUpload('${item.id}', '${imageType}')" title="重新上传${label}图片">
                        <img src="${imgUrl}" alt="${label}图片" class="preview-thumbnail" />
                        <button class="btn-preview-edit">
                            <i class="ph ph-pencil-simple"></i>
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="preview-img-cell">
                <div class="preview-img-placeholder" onclick="openPreviewUpload('${item.id}', '${imageType}')">
                    <i class="ph ph-image"></i>
                    <button class="btn-preview-plus" title="上传${label}图片">
                        <i class="ph ph-plus"></i>
                    </button>
                </div>
            </div>
        `;
    };

    const renderPromotionRow = (item) => {
        const { badgeClass, displayType } = getTypeDisplay(item.type);
        const statusClass = item.status === 'active' ? 'status-active' : 'status-inactive';
        const statusIcon = item.status === 'active' ? 'ph ph-check' : 'ph ph-x';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td><div class="${statusClass}"><i class="${statusIcon}"></i></div></td>
            <td style="font-size: 11px;">${item.period}</td>
            <td>${item.currency}</td>
            <td>${item.language}</td>
            <td><span class="badge ${badgeClass}">${displayType}</span></td>
            <td class="hidden-col">${item.activityType || '-'}</td>
            <td class="hidden-col"><span class="sort-number" data-id="${item.id}">${item.displaySort}</span></td>
            <td>${item.template}</td>
            <td>${item.name}</td>
            <td class="preview-main-col">
                <button class="btn btn-upload" onclick="openAssetDrawer('${item.id}')">
                    <i class="ph ph-upload-simple"></i>
                    上傳
                </button>
            </td>
            <td class="preview-detail">
                ${isRechargeTemplate(item.template) ? renderPreviewImageCell(item, 'h5') : '<span class="no-image-dash">—</span>'}
            </td>
            <td class="preview-detail">
                ${isRechargeTemplate(item.template) ? renderPreviewImageCell(item, 'pc') : '<span class="no-image-dash">—</span>'}
            </td>
            <td>${item.blacklist}</td>
            <td>${item.designatedAgent}</td>
            <td>${item.winCount}</td>
            <td>${item.withdrawRatio}</td>
            <td>${item.auditFailFee}</td>
            <td class="recharge-main-col">${isRechargeTemplate(item.template) ? (item.rechargeType || '-') : '<span class="no-image-dash">—</span>'}</td>
            <td class="recharge-detail">${isRechargeTemplate(item.template) ? (item.minRechargeAmount || '-') : '<span class="no-image-dash">—</span>'}</td>
            <td class="recharge-detail">${isRechargeTemplate(item.template) ? (item.minRechargeCount || '-') : '<span class="no-image-dash">—</span>'}</td>
            <td class="recharge-detail">${isRechargeTemplate(item.template) ? (item.rechargeCategory || '-') : '<span class="no-image-dash">—</span>'}</td>
            <td class="recharge-detail">${isRechargeTemplate(item.template) ? `<span class="sort-number">${item.rechargeSort || '-'}</span>` : '<span class="no-image-dash">—</span>'}</td>
            <td>
                <div class="row-actions">
                    <span class="action-btn btn-close">关闭</span>
                    <span class="action-btn btn-copy">复制</span>
                    <span class="action-btn btn-edit">编辑</span>
                    <span class="action-btn btn-delete">删除</span>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    };

    const renderFeaturedRow = (item) => {
        const { badgeClass, displayType } = getTypeDisplay(item.type);
        const statusClass = item.status === 'active' ? 'status-active' : 'status-inactive';
        const statusIcon = item.status === 'active' ? 'ph ph-check' : 'ph ph-x';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td><div class="${statusClass}"><i class="${statusIcon}"></i></div></td>
            <td style="font-size: 11px;">${item.period}</td>
            <td>${item.currency}</td>
            <td>${item.language}</td>
            <td><span class="badge ${badgeClass}">${displayType}</span></td>
            <td>${item.template}</td>
            <td>${item.name}</td>
            <td>
                <button class="btn btn-upload" onclick="openAssetDrawer('${item.id}')">
                    <i class="ph ph-upload-simple"></i>
                    上傳
                </button>
            </td>
            <td>${item.blacklist}</td>
            <td>${item.designatedAgent}</td>
            <td>${item.winCount}</td>
            <td>${item.withdrawRatio}</td>
            <td>${item.auditFailFee}</td>
            <td>
                <div class="row-actions">
                    <span class="action-btn btn-close">关闭</span>
                    <span class="action-btn btn-copy">复制</span>
                    <span class="action-btn btn-edit">编辑</span>
                    <span class="action-btn btn-delete">删除</span>
                </div>
            </td>
        `;
        featuredTableBody.appendChild(row);
    };

    // Function to initialize separate data for each tab
    const initializeTabData = () => {
        // Filter and store data separately for each tab
        promotionData = campaigns.filter(item => {
            const { group } = getTypeDisplay(item.type);
            return group === 'mixed';
        }).map(item => ({...item})); // Create copies to keep independent
        
        featuredData = campaigns.filter(item => {
            const { group } = getTypeDisplay(item.type);
            return group === 'sy';
        }).map(item => ({...item})); // Create copies to keep independent
    };

    // Function to get current tab data
    const getCurrentTabData = () => {
        return currentTab === 'featured' ? featuredData : promotionData;
    };

    // Initialize data for both tabs
    initializeTabData();

    // Initial render with promotion tab data
    renderTable(promotionData);

    // Sorting Logic
    const headers = document.querySelectorAll('th.sortable');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const key = header.getAttribute('data-sort');
            if (sortConfig.key === key) {
                sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
            } else {
                sortConfig.key = key;
                sortConfig.direction = 'asc';
            }

            // Update Icons (skip templateTypeExpand which uses plus/minus)
            headers.forEach(h => {
                if (h.id === 'templateTypeExpand') return; // Skip template type expand header
                const icon = h.querySelector('i');
                if (icon) icon.className = 'ph ph-caret-up-down';
            });
            const activeIcon = header.querySelector('i');
            if (header.id !== 'templateTypeExpand' && activeIcon) {
                activeIcon.className = sortConfig.direction === 'asc' ? 'ph ph-caret-up' : 'ph ph-caret-down';
            }

            // Get current tab data and create a copy to sort (keep original data unchanged)
            const dataToSort = [...getCurrentTabData()];
            
            // Perform Sort on current tab data only
            const sortedData = dataToSort.sort((a, b) => {
                let valA = a[key];
                let valB = b[key];

                // Numeric sort for ID
                if (key === 'id') {
                    valA = parseFloat(valA) || 0;
                    valB = parseFloat(valB) || 0;
                }
                
                // Weighted sort for 'type'
                if (key === 'type') {
                    valA = getSortWeight(valA);
                    valB = getSortWeight(valB);
                }

                // Numeric sort for 'sort' column
                if (key === 'sort') {
                    const valANum = parseFloat(valA) || 0;
                    const valBNum = parseFloat(valB) || 0;
                    return sortConfig.direction === 'asc' ? valANum - valBNum : valBNum - valANum;
                }

                if (key === 'rechargeSort') {
                    const aEmpty = a[key] === '--' || !a[key];
                    const bEmpty = b[key] === '--' || !b[key];

                    if (aEmpty && bEmpty) return 0;
                    if (aEmpty) return 1;
                    if (bEmpty) return -1;

                    const aVal = parseFloat(a[key]);
                    const bVal = parseFloat(b[key]);
                    return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
                }

                // Activity type sorting - treat '-' as empty/last
                if (key === 'activityType') {
                    const aEmpty = !valA || valA === '-';
                    const bEmpty = !valB || valB === '-';
                    
                    if (aEmpty && bEmpty) return 0;
                    if (aEmpty) return 1;
                    if (bEmpty) return -1;
                    
                    // String comparison for non-empty values
                    valA = String(valA).toLowerCase();
                    valB = String(valB).toLowerCase();
                }

                if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });

            renderTable(sortedData);
        });
    });

    // Toggle Filter Section
    const toggleFilter = document.getElementById('toggleFilter');
    const filterBody = document.querySelector('.filter-body');
    const toggleIcon = document.querySelector('.toggle-icon');

    toggleFilter.addEventListener('click', () => {
        filterBody.classList.toggle('collapsed');
        const isCollapsed = filterBody.classList.contains('collapsed');
        toggleIcon.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Mock Button Interactions
    document.getElementById('addCampaign').addEventListener('click', () => {
        alert('新增活动触发 - 你可以开发一个弹窗来新增活动！');
    });

    document.getElementById('refreshPage').addEventListener('click', () => {
        const btn = document.getElementById('refreshPage');
        const icon = btn.querySelector('i');
        icon.classList.add('ph-spin');
        setTimeout(() => {
            icon.classList.remove('ph-spin');
            renderTable(getCurrentTabData());
        }, 800);
    });

    // Preview Image Expand Toggle Logic
    let isPreviewExpanded = false;
    const campaignTable = document.getElementById('campaignTable');
    if (campaignTable) {
        campaignTable.setAttribute('data-preview-expanded', isPreviewExpanded);
    }

    // Template Type Expand Toggle Logic (for Activity Type and Sort columns)
    const templateTypeExpand = document.getElementById('templateTypeExpand');
    
    // Initial state setup
    if (campaignTable) {
        campaignTable.setAttribute('data-template-expanded', isTemplateExpanded);
    }

    templateTypeExpand.addEventListener('click', () => {
        isTemplateExpanded = !isTemplateExpanded;
        const icon = templateTypeExpand.querySelector('i');
        icon.className = isTemplateExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';
        
        // Update table attribute for CSS control
        campaignTable.setAttribute('data-template-expanded', isTemplateExpanded);
    });

    // Preview Image Expand Toggle
    const previewImgExpand = document.getElementById('previewImgExpand');
    if (previewImgExpand) {
        previewImgExpand.addEventListener('click', () => {
            isPreviewExpanded = !isPreviewExpanded;
            const icon = previewImgExpand.querySelector('i');
            icon.className = isPreviewExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';
            campaignTable.setAttribute('data-preview-expanded', isPreviewExpanded);
        });
    }

    // Recharge Type Expand Toggle Logic
    const rechargeTypeExpand = document.getElementById('rechargeTypeExpand');
    if (rechargeTypeExpand) {
        campaignTable.setAttribute('data-recharge-expanded', isRechargeTypeExpanded);
        rechargeTypeExpand.addEventListener('click', () => {
            isRechargeTypeExpanded = !isRechargeTypeExpanded;
            const icon = rechargeTypeExpand.querySelector('i');
            icon.className = isRechargeTypeExpanded ? 'ph ph-minus-circle' : 'ph ph-plus-circle';
            campaignTable.setAttribute('data-recharge-expanded', isRechargeTypeExpanded);
        });
    }

    // Asset Drawer Logic
    const assetDrawer = document.getElementById('assetDrawer');
    const assetTableBody = document.getElementById('assetTableBody');

    window.openImageUpload = (id, type) => {
        const campaign = campaigns.find(c => c.id === id);
        if (!campaign) return;
        
        const typeLabel = type === 'pc' ? 'PC' : 'H5';
        const labelText = type === 'pc' ? 'pc图片:' : 'h5图片:';
        
        // Update modal content
        document.getElementById('uploadModalTitle').textContent = `上傳${typeLabel}圖片`;
        document.getElementById('uploadLabel').textContent = labelText;
        
        // Store current upload info
        window.currentUpload = { id, type };
        
        // Reset form
        document.getElementById('fileInput').value = '';
        document.getElementById('urlInput').value = '';
        
        // Show modal
        const modal = document.getElementById('uploadImageModal');
        modal.classList.add('show');
    };

    // Open preview upload modal (triggered from table + button)
    window.openPreviewUpload = (campaignId, imageType) => {
        const typeLabel = imageType === 'pc' ? 'PC' : 'H5';
        const labelText = imageType === 'pc' ? '充值PC圖片:' : '充值H5圖片:';

        document.getElementById('uploadModalTitle').textContent = `上傳${typeLabel}充值圖片`;
        document.getElementById('uploadLabel').textContent = labelText;

        window.currentUpload = { id: campaignId, type: imageType };

        document.getElementById('fileInput').value = '';
        document.getElementById('urlInput').value = '';

        const modal = document.getElementById('uploadImageModal');
        modal.classList.add('show');
    };

    // File input change handler
    document.getElementById('fileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert('文件大小不能超過2MB');
                e.target.value = '';
                return;
            }
            // Show file name in URL input
            document.getElementById('urlInput').value = file.name;
        }
    });

    // Select file button handler
    window.selectFile = () => {
        document.getElementById('fileInput').click();
    };

    // Confirm upload handler
    window.confirmUpload = () => {
        const urlInput = document.getElementById('urlInput').value;
        const fileInput = document.getElementById('fileInput');
        
        if (!urlInput && !fileInput.files[0]) {
            alert('請選擇文件或輸入圖片連結');
            return;
        }
        
        const { id, type } = window.currentUpload || {};
        console.log(`Uploading ${type} image for campaign ${id}:`, urlInput || fileInput.files[0]?.name);
        
        // Close modal
        document.getElementById('uploadImageModal').classList.remove('show');
        
        alert('上傳成功！');
    };

    // Cancel upload handler
    window.closeUploadModal = () => {
        document.getElementById('uploadImageModal').classList.remove('show');
    };

    // Close modal on outside click
    document.getElementById('uploadImageModal')?.addEventListener('click', (e) => {
        if (e.target.id === 'uploadImageModal') {
            document.getElementById('uploadImageModal').classList.remove('show');
        }
    });

    window.openAssetDrawer = (id) => {
        const campaign = campaigns.find(c => c.id === id);
        if (!campaign) return;

        // Populate info
        document.getElementById('infoName').textContent = campaign.name;
        document.getElementById('infoId').textContent = campaign.id;
        document.getElementById('infoType').textContent = campaign.type;
        document.getElementById('infoTime').textContent = campaign.period;
        document.getElementById('infoTemplate').textContent = campaign.template;
        document.getElementById('infoCurrency').textContent = campaign.currency;

        // Render mock assets based on campaign languages
        const languages = campaign.language ? campaign.language.split(' ') : ['未知'];
        assetTableBody.innerHTML = languages.map((lang) => {
            // For demonstration based on screenshot for ID 50458:
            // "英文" row shows a placeholder for the first cell, "越南" row shows images.
            const isEnglishPlaceholder = campaign.id === '50458' && (lang === '英文' || lang === '英语');
            
            return `
                <tr>
                    <td>${lang}</td>
                    <td>${renderAssetCard(isEnglishPlaceholder ? null : 'pc_list.png', 'pc_list.png')}</td>
                    <td>${renderAssetCard('pc_content.png', 'pc_content.png')}</td>
                    <td>${renderAssetCard('h5_list.png', 'h5_list.png')}</td>
                    <td>${renderAssetCard('h5_content.png', 'h5_content.png')}</td>
                </tr>
            `;
        }).join('');

        assetDrawer.classList.add('open');
    };

    window.closeAssetDrawer = () => {
        assetDrawer.classList.remove('open');
    };

    window.saveAssets = () => {
        alert('资产已保存！');
        closeAssetDrawer();
    };

    function renderAssetCard(src, filename) {
        if (!src) {
            return `
                <div class="asset-card">
                    <div class="asset-placeholder">
                        <i class="ph ph-cloud-arrow-up"></i>
                        <span>上传图片</span>
                        <small>PNG/JPG &le; 1MB</small>
                    </div>
                    <input type="text" class="asset-url-input" value="" placeholder="图片 URL">
                </div>
            `;
        }
        return `
            <div class="asset-card">
                <button class="btn-delete-asset" onclick="this.parentElement.remove()">&times;</button>
                <img src="${src}" alt="${filename}" onclick="window.openImageModal('${src}')">
                <input type="text" class="asset-url-input" value="${src}" placeholder="图片 URL">
            </div>
        `;
    }

    window.openImageModal = (src) => {
        const imageModal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        imageModal.style.display = 'block';
        modalImg.src = src;
    };

    // Image Modal Logic
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal-close');

    campaignTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('thumbnail-preview')) {
            imageModal.style.display = 'block';
            modalImg.src = e.target.src;
        }
    });

    closeBtn.onclick = () => imageModal.style.display = 'none';
    imageModal.onclick = (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    };

    // Handle Action Clicks
    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-btn')) {
            const action = e.target.textContent.trim();
            const rowId = e.target.closest('tr').cells[0].textContent;
            console.log(`Action: ${action} on ID: ${rowId}`);
            // Logic for each action could be added here
        }
    });

    // Template Type & Activity Template Dropdowns
    const templateTypeFilter = document.getElementById('templateTypeFilter');
    const activityTemplateFilterContainer = document.getElementById('activityTemplateFilterContainer');
    const activityTemplateTrigger = document.getElementById('activityTemplateTrigger');
    const activityTemplateText = document.getElementById('activityTemplateText');
    const activityTemplateDropdown = document.getElementById('activityTemplateDropdown');
    const activityTemplateSelectAll = document.getElementById('activityTemplateSelectAll');
    const activityTemplateOptions = document.querySelectorAll('.activity-template-option');

    // Template mapping based on type
    const templateMapping = {
        'SY': ['连续性活动', '每天登录活动', '砸金蛋活动', '救援金活动'],
        'SN': ['充值優惠活動', '注册礼金活动', '三方对局数彩金活动', '三方盈利彩金活动', '周充值优惠活动', '彩票下注期数奖金活动', '下载有奖', '定期宝箱'],
        'CU': []
    };

    // Update activity template trigger text
    const updateActivityTemplateText = () => {
        const checkedOptions = document.querySelectorAll('.activity-template-option:checked');
        if (checkedOptions.length === 0) {
            activityTemplateText.textContent = '請選擇活動模板';
        } else if (checkedOptions.length === activityTemplateOptions.length) {
            activityTemplateText.textContent = `已選擇全部`;
        } else {
            activityTemplateText.textContent = `已選擇 ${checkedOptions.length} 項`;
        }
    };

    // Position and toggle activity template dropdown
    const positionActivityTemplateDropdown = () => {
        const rect = activityTemplateTrigger.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        activityTemplateDropdown.style.left = (rect.left + scrollX) + 'px';
        activityTemplateDropdown.style.top = (rect.bottom + scrollY) + 'px';
        activityTemplateDropdown.style.width = rect.width + 'px';
        activityTemplateDropdown.style.position = 'fixed';
    };

    activityTemplateTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        positionActivityTemplateDropdown();
        activityTemplateDropdown.classList.toggle('open');
        activityTemplateTrigger.classList.toggle('active');
    });

    // Close activity template dropdown when clicking outside
    document.addEventListener('click', () => {
        activityTemplateDropdown.classList.remove('open');
        activityTemplateTrigger.classList.remove('active');
    });

    activityTemplateDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Handle activity template select all
    activityTemplateSelectAll.addEventListener('change', () => {
        activityTemplateOptions.forEach(opt => {
            opt.checked = activityTemplateSelectAll.checked;
        });
        updateActivityTemplateText();
    });

    // Handle individual activity template options
    activityTemplateOptions.forEach(option => {
        option.addEventListener('change', () => {
            const allChecked = Array.from(activityTemplateOptions).every(opt => opt.checked);
            const someChecked = Array.from(activityTemplateOptions).some(opt => opt.checked);
            activityTemplateSelectAll.checked = allChecked;
            activityTemplateSelectAll.indeterminate = someChecked && !allChecked;
            updateActivityTemplateText();
        });
    });

    // Filter and Reset Functionality
    const resetFilter = document.getElementById('resetFilter');
    const queryFilter = document.getElementById('queryFilter');
    const statusFilter = document.getElementById('statusFilter');

    // Helper to map template type value to display text for matching
    const getTemplateTypeDisplay = (value) => {
        const mapping = {
            'SY': ['系统 (有专页)', '系統 (有專頁)'],
            'SN': ['系统 (无专页)', '系統 (無專頁)'],
            'CU': ['自定义', '自定義']
        };
        return mapping[value] || [value];
    };

    // Query button - filter data based on selected criteria
    queryFilter.addEventListener('click', () => {
        const selectedType = templateTypeFilter ? templateTypeFilter.value : '';
        const selectedTemplates = Array.from(document.querySelectorAll('.activity-template-option:checked')).map(opt => opt.value);
        const selectedStatus = statusFilter.value;

        let filteredData = getCurrentTabData();

        // Filter by template type
        if (selectedType) {
            filteredData = filteredData.filter(item => {
                const typeMap = { 'CU': '自定义', 'SN': '系统 (无专页)' };
                return item.type === typeMap[selectedType];
            });
        }

        // Filter by activity template (multi-select)
        if (selectedTemplates.length > 0) {
            filteredData = filteredData.filter(item => selectedTemplates.includes(item.template));
        }

        // Re-render filtered data
        renderTable(filteredData);
    });

    // Function to update activity template dropdown options based on tab
    const updateActivityTemplateOptions = () => {
        const featuredTemplates = ['连续性活动', '每天登录活动', '砸金蛋活动', '救援金活动'];
        // 優惠活動 - removed '自定义'
        const promotionTemplates = ['充值優惠活動', '注册礼金活动', '三方对局数彩金活动', '三方盈利彩金活动', '周充值优惠活动', '彩票下注期数奖金活动', '下载有奖', '定期宝箱'];
        
        const templatesToShow = currentTab === 'featured' ? featuredTemplates : promotionTemplates;
        
        // Update all options visibility
        const allOptions = document.querySelectorAll('.activity-template-option');
        allOptions.forEach(option => {
            const optionContainer = option.closest('.multi-select-option');
            if (templatesToShow.includes(option.value)) {
                optionContainer.style.display = 'block';
            } else {
                optionContainer.style.display = 'none';
                option.checked = false; // Uncheck hidden options
            }
        });
        
        // Update text
        updateActivityTemplateText();

        // Show/hide template type filter based on tab (only show for promotion tab)
        const templateTypeFilterItem = document.getElementById('templateTypeFilterItem');
        if (templateTypeFilterItem) {
            templateTypeFilterItem.style.display = currentTab === 'promotion' ? 'block' : 'none';
        }

    };

    // Function to disable/enable activity template based on template type selection
    const updateActivityTemplateState = () => {
        const selectedType = templateTypeFilter.value;
        if (selectedType === 'CU') {
            // Disable activity template when '自定义' is selected
            activityTemplateFilterContainer.classList.add('disabled');
            activityTemplateTrigger.style.pointerEvents = 'none';
            activityTemplateTrigger.style.opacity = '0.5';
            activityTemplateText.textContent = '請選擇活動模板';
            // Clear all selections
            activityTemplateOptions.forEach(opt => opt.checked = false);
            activityTemplateSelectAll.checked = false;
            activityTemplateSelectAll.indeterminate = false;
        } else {
            // Enable activity template
            activityTemplateFilterContainer.classList.remove('disabled');
            activityTemplateTrigger.style.pointerEvents = 'auto';
            activityTemplateTrigger.style.opacity = '1';
        }
    };

    // Template type change listener
    templateTypeFilter.addEventListener('change', updateActivityTemplateState);

    // Tab Switching Logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update current tab
            currentTab = btn.getAttribute('data-tab');
            
            // Reset sort when switching tabs
            sortConfig.key = null;
            sortConfig.direction = 'asc';
            headers.forEach(h => {
                if (h.id === 'templateTypeExpand') return; // Skip template type expand header
                const icon = h.querySelector('i');
                if (icon) icon.className = 'ph ph-caret-up-down';
            });

            // Update activity template dropdown options
            updateActivityTemplateOptions();

            // Toggle table containers
            const promotionCont = document.getElementById('promotionTableContainer');
            const featuredCont = document.getElementById('featuredTableContainer');
            if (currentTab === 'promotion') {
                if (promotionCont) promotionCont.style.display = 'block';
                if (featuredCont) featuredCont.style.display = 'none';
            } else {
                if (promotionCont) promotionCont.style.display = 'none';
                if (featuredCont) featuredCont.style.display = 'block';
            }

            // Get data for new tab and render (each tab has independent data)
            const tabData = getCurrentTabData();
            renderTable(tabData);
        });
    });

    // Initial setup for activity template options
    updateActivityTemplateOptions();
});
